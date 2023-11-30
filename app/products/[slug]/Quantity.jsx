"use client"

import { GlobalData } from "@/Context/Context";
import React, { useContext, useState } from "react";

const Quantity = ({product}) => {

  const {addToCart} = useContext(GlobalData)



    var [q,setQ] = useState(0)

  return (
    <div className="my-4 flex">
      {/* Quantity */}
      <div className="flex items-center mr-4">
        <button onClick={()=>setQ(q-1)} disabled={q==0} className="border disabled:cursor-not-allowed text-xl font-semibold bg-gray-200 border-gray-400 p-2">
          -
        </button>
        <span className="text-2xl mx-2">{q}</span>
        <button onClick={()=>setQ(q+1)} className="border text-xl font-semibold bg-gray-200 border-gray-400 p-2">
          +
        </button>
      </div>

      <button onClick={()=>addToCart(product)} className="bg-black text-white py-2 px-4">Add to Cart</button>
    </div>
  );
};

export default Quantity;
