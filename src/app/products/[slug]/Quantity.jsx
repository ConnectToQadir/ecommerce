"use client"

import { GlobalData } from "@/src/Context/Context";
import React, { useContext, useState } from "react";

const Quantity = ({product}) => {

  const {addToCart,cart,decreseItemQuantity} = useContext(GlobalData)


  var quantity = cart.cartItems.filter(v=>v._id == product._id)[0]?.quantity || 0


  return (
    <div className="my-4 flex">
      {/* Quantity */}
      <div className="flex items-center mr-4">
        <button disabled={quantity == 0} onClick={()=>decreseItemQuantity(product)} className="border disabled:cursor-not-allowed text-xl font-semibold bg-gray-200 border-gray-400 p-2">
          -
        </button>
        <span className="text-2xl mx-2">{ quantity }</span>
        <button onClick={()=>addToCart(product)} className="border text-xl font-semibold bg-gray-200 border-gray-400 p-2">
          +
        </button>
      </div>

      <button onClick={()=>addToCart(product)} className="bg-black text-white py-2 px-4">Add to Cart</button>
    </div>
  );
};

export default Quantity;
