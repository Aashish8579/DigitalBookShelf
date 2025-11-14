import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Course(){
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
const res=await axios.get("http://localhost:3000/book")
console.log(res.data);
setBook(res.data);
      }catch(error){
        console.log(error);
      }
    }
  getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className="mt-28 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! 🎉</span>
          </h1>
          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab
            obcaecati quod iure vero iste fugit doloremque aut reiciendis
            ducimus, vel beatae alias, modi ullam porro consectetur dolores
            recusandae consequatur!
          </p>

          <Link to="/"> {/*wrapping button to link for navigation to home*/}
            <button className="bg-pink-500 rounded text-white px-4 py-2 hover:bg-pink-700 mt-6 transition duration-300">
              Back
            </button>
          </Link>

        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 space mr-4 ">
          {" "}
          {/* mobile pe ek card dikhega or medium or usse bade device pe 3 card dikhega*/}
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
