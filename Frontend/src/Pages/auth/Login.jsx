import React from "react";
import { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const [user, setUser] = useState({

    email: "",
    phone: "",
  });
  
console.log(user.email);
console.log(user.phone);
  const navigate = useNavigate();
  const handleSingInWithGoogle = async () => {
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result.user);
      fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          toast.success("Login successfully");
          navigate("/");
          // frontend work
        });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email) {
      window.alert("Email is required ");
      // return;
    }
    if (!user.phone) {
      window.alert("Phone Number is required ");
      //  return;
    }
    try {
      fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         
          email: user.email,
          phone: "+91" + user.phone
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          // toast.success("Login successfully");
        if(res.success){
          navigate('/auth/phonesignup', {
            state: user
          });

        }   
        else{
          toast.error(res.message);
        }  
        });
      
      
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) =>
                    setUser({ ...user, ["email"]: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1234056789"
                  required=""
                  onChange={(e) =>
                    setUser({ ...user, ["phone"]: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-green-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login an account
              </button>
              <button
                onClick={handleSingInWithGoogle}
                type="submit"
                className="w-full bg-green-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Continue with google
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have account?{" "}
                <Link
                  to="/auth/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;