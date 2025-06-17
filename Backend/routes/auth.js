const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { check, validationResult, body } = require('express-validator/check');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SCRET="prakhyatisCoder";
//Route 1: create a user using :POST "/api/auth/createuser" . Dosent require auth .No login required 
router.post('/createuser',[
    body('name',"Enter a valid name").isLength({min:3}),
    body('email',"Enter a  valid email").isEmail(),
    body('password',"Password must be atleast 5 character").isLength({min:5}),
],async(req,res)=>{
let success=false;
    //if there are error ,return Bad request and the error
try{
    let user = await User.findOne({ email: req.body.email });
if (user) {
  res.status(400).json({ success,error: "A user with this email already exists" });
}
 const errors =validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ success,errors:errors.array() });
    }
//checks whetherr the user with this email exist already
var bcrypt =require('bcryptjs');
const salt = await bcrypt.genSaltSync(10);
const secPass=await bcrypt.hash(req.body.password,salt);
  user=await User.create({
    name:req.body.name,
    email:req.body.email,
    password:secPass,
  })
  const data ={
    user:{
      id: user._id
    }
  }
  success=true;
  const authToken=jwt.sign(data,JWT_SCRET);
  return res.status(201).json({
    success,
    message: "User created successfully",
    authToken,
});
}catch(error){
  console.log(error.message);
  res.status(500).send("Some error occured");
}
})
//Route 2: autheeniticate a user using :POST "/api/auth/login" . Dosent require auth .No login required 
router.post('/login', [
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password cannot be blank").exists(),
], async (req, res) => {
  console.log("Login request body:", req.body);
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({ success,errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    console.log("Finding user by email:", email);
    let user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ success,error: "Please try to login with correct credentials" });
    }

    console.log("Comparing passwords");
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success=false;
      console.log("Password mismatch");
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user._id
      }
    };

    const authToken = jwt.sign(data, JWT_SCRET);
    console.log("Auth token generated");
    success=true;
    res.json({ success, authToken });

  } catch (error) {
    success=false;
    console.error("Error in login route:", error);
    res.status(500).send("Internal Server Error occurred");
  }
});
//Route 3:  Get user detail using :POST "/api/auth/getuser" . Dosent require auth . login required 
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;  // Correct way to access user ID from middleware
    const user = await User.findById(userId).select("-password");
    res.send(user);  // Changed from `res.send` to `res.json` for consistency
  } catch (error) {
    console.error("Error in getuser route:", error.message);
    res.status(500).send("Internal Server Error occurred");
  }
});

module.exports=router
