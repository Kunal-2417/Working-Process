const  Router = require("express");
const { PhoneAuthController, googleAuthController, loginController, SignupController } = require ("../Controllers/authController.js");
const User = require("../Model/User.js")
const router = Router();



router.post("/google", googleAuthController);
router.post("/phone", PhoneAuthController);
router.post("/login", loginController);
router.post("/checkUser", SignupController)

  
  
module.exports = router;
