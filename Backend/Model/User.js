const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,

      unique: true,
    },
    userId: {
      type: String,
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
    fromPhone:{
      type: Boolean,
      default: false,
    },
    loginCount:{
      type:Number,
      default:1,
    },
    loginDate: {
      type: Array,
      date:  new Date(),
      default: [new Date()]
    },
    // subscription: {
    //   type: String,
      
    // },
    subscription: {
      type: String,
      enum: ['free', 'silver', 'gold'],
      default: 'free',
    },
  
  },
  { timestamps: true }
);

 module.exports={userModel: mongoose.model("User", UserSchema)};

