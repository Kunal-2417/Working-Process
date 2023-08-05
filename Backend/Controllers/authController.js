const createError = require("../utils/Error.js");
const {userModel} = require("../Model/User.js");
const  jwt = require("jsonwebtoken");


console.log(userModel);
module.exports.googleAuthController = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
 
   console.log(user);
  
  if(user) {
     await userModel.findOneAndUpdate({email: user.email},{
      loginDate: [...user.loginDate,   new Date(Date.now())  ],
        loginCount: user.loginCount+1,
      })
      const token = jwt.sign({ id: user._id }, process.env.JWT, {
        expiresIn: "7d", // 7 days
      });
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .send({
          success: true,
          user: user,
        });
    } else {
      const newUser = await new userModel({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = await jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .send({
          success: true,
          user: savedUser,
          message: "User created successfully",
        });
    }
  } catch (error) {
    return next(createError(error.status, error.message));
  }
};


module.exports.PhoneAuthController = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
     await userModel.findOneAndUpdate({email: user.email},{
      loginDate: [...user.loginDate,   new Date(Date.now())  ],
        loginCount: user.loginCount+1,

      })
      const token = jwt.sign({ id: user._id }, process.env.JWT, {
        expiresIn: "7d", // 7 days
      });
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .send({
          success: true,
          user: user,
        });
    } else {
      const newUser = await new userModel({
        ...req.body,
        fromPhone: true,
      });
      const savedUser = await newUser.save();
      const token = await jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .send({
          success: true,
          user: savedUser,
          message: "User created successfully",
        });
    }
  } catch (error) {
    return next(createError(error.status, error.message));
  }
};


module.exports.loginController = async (req, res, next) => {

  const { email, phone } = req.body;
    try {
    

    // validation
    if (!email || !phone) {
      return next(createError(400, "Invalid email or phone"));
    }

    // check user
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    

    const matchPhone = await userModel.findOne({phone: phone});
    if (!matchPhone) {
      return next(createError(400, "Invalid phone Number"));
    }
    res.status(200).send({
      success: true,
      message: "User Found Successfully"
    }) 


  } catch (error) {
    return next(createError(error.status, error.message));
  }
  


  
};

module.exports. SignupController = async (req,res) => {
  const {  email } = req.body;

  const user = await userModel.findOne({ email: email });
  if (user) {
    res.status(200).send({
      success: true,
      message: "Already Signup Please Login"
    }) 
 
  }
  else{
    res.status(200).send({
      success: false,
      message: "Continue to Signup"
    }) 
  }
  
}
