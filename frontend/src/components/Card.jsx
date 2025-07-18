import React from 'react';
import cardImage from "../assets/card.jpeg";
import { AiOutlineLike } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

function Card() {
  return (
    <div className="card flex justify-center items-center">
      <div className="card bg-base-100 w-[230px] h-[280px] shadow-2xl p-2 border border-black rounded-xl 
        transform transition-transform duration-300 hover:scale-105">
        
        <figure>
          <img className="rounded-lg w-full h-[150px] object-cover" src={cardImage} alt="Shoes" />
        </figure>

        <div className="flex justify-end  gap-2 mt-5">
          <p className="h-[30px] w-[30px] flex items-center justify-center bg-cyan-600 text-white rounded-full hover:bg-red-400 cursor-pointer transition-all duration-200">
            <AiOutlineLike /> 
          </p>
          <p className="h-[30px] w-[30px] flex items-center justify-center bg-cyan-600 text-white rounded-full hover:bg-red-400 cursor-pointer transition-all duration-200">
            <BsStar />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
