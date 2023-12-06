"use client"

import { GlobalData } from "@/src/Context/Context"
import { useContext } from "react"

const AddToCartIcon = ({product}) => {

    const {addToCart} = useContext(GlobalData)

  return (
    <i onClick={()=>addToCart(product)} className="bx cursor-pointer text-xl bg-white m-1 p-2 bx-cart"></i>
  )
}

export default AddToCartIcon