import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import axios from "axios";
import OtpInput from "otp-input-react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";

const PhoneSignup = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  // console.log(state)
  const [otp, setOtp] = useState("");

  const [ph, setPh] = useState("+91" + state.phone);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  // const [counter, setCounter] = useState(20);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    
    setLoading(true);
    setMinutes(0);
    setSeconds(15);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        
        setLoading(false);
        setShowOTP(true);
        
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        fetch("http://localhost:3000/api/auth/phone", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: state.name,
            email: state.email,
            phone: res.user.phoneNumber,
            uid: res.user.uid,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            toast.success("Signup successfully");
            localStorage.setItem('signupData', JSON.stringify(user));
            console.log(user);
            navigate("/");
            // frontend work
          });
        console.log(res);
        setUser(res.state);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    console.log(state);
  }

 

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  // timer
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> APP
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                {/* <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput> */}
                <OtpInput value={otp}
                 onChange={setOtp} 
                 autoFocus 
                 OTPLength={6}
                  otpType="number"
                   disabled={false} 
                    />

                {/* <input type="Number" value={otp} onChange={setOtp}></input> */}
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"In"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send OTP via SMS</span>
                </button>

                <div className="countdown-text">
                  {seconds > 0 || minutes > 0 ? (
                    <p>
                      Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  ) : (
                    <p>Didn't recieve code?</p>
                  )}

                  <button
                    disabled={seconds > 0 || minutes > 0}
                    style={{
                      color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                    }}
                    onClick={onSignup}
                  >
                    Resend OTP
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhoneSignup;
