import mongoose from "mongoose";

// Define book Schema
const bookSchema=new mongoose.Schema({
name:String,
price:Number,
category:String,
image:String,
title:String

})

// creating book model (Book)
const Book=mongoose.model("Book",bookSchema); 

export default Book;