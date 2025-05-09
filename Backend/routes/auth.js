const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { check, validationResult, body } = require('express-validator/check');

var jwt = require('jsonwebtoken');
const JWT_SCRET="prakhyatisCoder";
//create a user using :POST "/api/auth/" . Dosent require auth .No login required 
router.post('/createuser',[
    body('name',"Enter a valid name").isLength({min:3}),
    body('email',"Enter a  valid email").isEmail(),
    body('password',"Password must be atleast 5 character").isLength({min:5}),
],async(req,res)=>{
    //if there are error ,return Bad request and the error
try{
    let user = await User.findOne({ email: req.body.email });
if (user) {
  res.status(400).json({ error: "A user with this email already exists" });
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
  const authToken=jwt.sign(data,JWT_SCRET);
  return res.status(201).json({
    message: "User created successfully",
    authToken,
});
}catch(error){
  console.log(error.message);
  res.status(500).send("Some error occured");
}
})
module.exports=router
