const mongoose=require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
     uid: {
         ref: "userModel",
         type: String,
         required: true,
        
     },
     email:{
        type: String,
        required:true,
     },
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true,
    },
    Date:{
        type: String,
        date:  new Date(),
        
    }


    }
)
module.exports={PaymentModel: mongoose.model("Payment", PaymentSchema)};