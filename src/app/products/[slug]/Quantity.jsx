"use client"

import { GlobalData } from "@/src/Context/Context";
import React, { useContext, useState } from "react";

const Quantity = ({product}) => {

  const {addToCart} = useContext(GlobalData)


  return (
    <div className="my-4 flex">
      {/* Quantity */}
      <div className="flex items-center mr-4">
        <button className="border disabled:cursor-not-allowed text-xl font-semibold bg-gray-200 border-gray-400 p-2">
          -
        </button>
        <span className="text-2xl mx-2">0</span>
        <button className="border text-xl font-semibold bg-gray-200 border-gray-400 p-2">
          +
        </button>
      </div>

      <button onClick={()=>addToCart(product)} className="bg-black text-white py-2 px-4">Add to Cart</button>
    </div>
  );
};

export default Quantity;
