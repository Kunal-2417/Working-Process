import React, { useState } from "react";
import "./Subscription.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  const [Subsciption, setSubscription] = useState();
  const [SubsciptionType, setSubscriptionType] = useState();

  console.log(Subsciption)

  const handleFree = () => {
    alert("Its is free and already given");
  };
  const handleOpenRazorpay = async (data) => {
    const storedSignupData = localStorage.getItem("signupData");
    const signupData = JSON.parse(storedSignupData);
    const uid = signupData.user.uid;
    console.log(uid);
    const email = signupData.user.email;
    console.log(email);

    const {
      data: { key },
    } = await axios.get("http://localhost:3000/getKey");
    const options = {
      key,
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: "Dental Website",
      description: "XYZ",
      prefill: {
        name: "Vidhi Gupta",
        email: "abc@gmail.com",
        phone: "1234456789",
      },
      handler: function (response) {
        console.log(response, "34");

        axios
          .post("http://localhost:3000/verfiy", {
            response: response,
            uid: uid,
            email: email,
            Subsciption: Subsciption,
            amount: Number(data.amount)
          })
          .then((res) => {
            console.log(res, "37");

            navigate("/paymentsuccess");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
    localStorage.removeItem("signupData");
    const rzp = new window.Razorpay(options);

    rzp.open();
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios
      .post("http://localhost:3000/orders", _data)
      .then((res) => {
        console.log(res.data, "29");
        handleOpenRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="heading">Welcome to Subsciption page</h1>
      <div className="contain">
        <div className="main">
          <div>
            <h1>subscribe</h1>
            <input
                  type="text"
                  name="text"
                  value={Subsciption}
                  id="Subcription"
                 
                  placeholder="write subscription"
                  required
                  onChange={(e) =>
                    setSubscription( e.target.value )
                  }
                />

            <div className="cards silver">
              <div className="details ">
                <b className="free">Free</b>
                <p>1 Question per day</p>
                <p>
                  Price: <span className="symbol"> &#8377;0</span>
                </p>
              </div>

              <button className="button" onClick={handleFree}>
                BUY NOW
              </button>
            </div>

            <div className="cards  borders">
              <div className="details">
                <b className="free">Silver</b>
                <p>5 Question per day</p>
                <p>
                  Price: <span className="symbol"> &#8377;100</span>
                </p>
              </div>

              <button className="button" onClick={() => handlePayment(100)}>
                BUY NOW
              </button>
            </div>

            <div className="cards borders">
              <div className="details">
                <b className="free">Gold</b>
                <p>Unlimited Question </p>
                <p>
                  Price:<span className="symbol"> &#8377;1000</span>{" "}
                </p>
              </div>

              <button className="button" onClick={() => handlePayment(1000)}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
