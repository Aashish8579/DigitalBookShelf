// We Define Function in Controller to handle User Related Operations
import User from "../model/user.model.js";
import bcryptjs from  "bcryptjs";
export const signup=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User alreday exists"});
        }
         
        const hashPassword=await bcryptjs.hash(password,10);
        //  Body se data leke new user create karenge
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })
// Save the user to database
      await   createdUser.save();
        res.status(201).json({message:"User created succesfully"});
    }
    catch(error){
  console.log("Error :"+error.message);
  res.status(500).json({message:"Something went wrong"});
    }
}

export const login=async (req,res)=>{
    try{
  const {email,password}=req.body;
  const user=await User.findOne({email}); // check if user with given email exists in db
  const isMatch=await bcryptjs.compare(password,user.password) // user.password is hashed password stored in db

  if(!user || !isMatch){
    return res.status(400).json({"message":"Invalid credentials"});
  }
  else{
    res.status(200).json({"message":"Login successful",user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email,

    }})

  }
    }catch(error){
console.log("Error:",error);
res.status(500).json({message:"Something went wrong"});
    }
}