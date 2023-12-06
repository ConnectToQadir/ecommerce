"use client"

import React, { useContext, useState } from "react";
import Link from "next/link";
import { GlobalData } from "@/src/Context/Context";

const Navbar = () => {

  const {cart} = useContext(GlobalData)
  const [open,setOpen] = useState(false)

  return (
    <div className="bg-white shadow-md  backdrop-blur-md top-0 z-50 sticky">
      <nav className="flex px-4 items-center max-w-6xl mx-auto justify-between">
        <div>
          <img
            className=""
            src="https://preview.colorlib.com/theme/malefashion/img/logo.png.webp"
            alt=""
          />
        </div>

        <ul className="hidden md:block">
          <li>
            <Link className="py-5 px-4 text-lg inline-block" href="/">
              Home
            </Link>
            <Link className="py-5 px-4 text-lg inline-block" href="/about">
              About
            </Link>
            <Link className="py-5 px-4 text-lg inline-block" href="/blog">
              Blog
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <i className="bx p-2 text-xl bx-search"></i>
          <i className="bx p-2 text-xl bx-heart"></i>
          <i className="bx p-2 text-xl bx-cart"></i>
          {cart.totalItems}
          <br />
          {cart.cartTotal}
        </div>

        {/* Mobile Navbar */}

        <div className={`border-2 block ${open ? "" : "-translate-x-[100%]"} md:hidden transition-all duration-1000 bg-white p-4 w-1/2 h-screen border-red-500 absolute top-0 left-0`} >

        <div className="">
          <i className="bx p-2 text-xl bx-search"></i>
          <i className="bx p-2 text-xl bx-heart"></i>
          <i className="bx p-2 text-xl bx-cart"></i>
        </div>

          <ul className="">
            <li>
              <Link className="p-2 text-lg block" href="/">
                Home
              </Link>
              <Link className="p-2 text-lg block" href="/about">
                About
              </Link>
              <Link className="p-2 text-lg block" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>


        <div className="block md:hidden">
          <i onClick={()=>setOpen(!open)} className={`bx cursor-pointer p-3 text-3xl bx-${open ? "x" : "menu"}`}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
