import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import cors from "cors"
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app=express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT ||4000;
const MONGO_URL=process.env.MONGO_URL;

// app.get("/",(req,res)=>{
//     res.send("Hello World  from express");
// });

// Connect to mongodb
try{
mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("Connected to mongodb")
}catch(error){
console.log("Erro:",error)
}

// Defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT,()=>{{
    console.log(`Server is running at port ${PORT}`);
}})