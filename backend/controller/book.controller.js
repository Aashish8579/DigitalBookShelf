import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{
    try{
  const book=await Book.find(); // fetch/find data or all books from model
  res.status(200).json(book);  // send the data as json response with status 200 
    }catch(error){
console.log("Error",error);
res.status(500).json(error);
    }
}