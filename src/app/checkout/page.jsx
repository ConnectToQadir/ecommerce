"use client";
import { GlobalData } from "@/src/Context/Context";
import React, { useContext, useState } from "react";
import InputMask from 'react-input-mask'
import axios from "axios";

const Page = () => {
  var { cart,removeItemFromCart } = useContext(GlobalData);


  var [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    city:"",
    address:"",
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  


  var placeOrder = async (e) =>{
    e.preventDefault()
    try {
      
      var res = await axios.post('/api/orders',{
        items:cart.cartItems.map(v=>{
          var obj = {
            productID:v._id,
            unitPrice:v.price,
            quantity:v.quantity
          }
          return obj
        }),
        customerDetail:formData
      })

      if(res.data.success){
        alert("Order Placed Successfully!")
      }

    } catch (error) {
      alert('Something went wrong!')
    }
  }


  return (
    <div className="px-4">
      <form onSubmit={placeOrder} className="max-w-6xl mx-auto grid gap-6 grid-cols-5  py-10">


        <div className="grid grid-cols-2 gap-6 col-span-5 lg:col-span-3">
          <h2 className="col-span-2 font-semibold text-2xl">
            Shipping Details
          </h2>

          <div className="">
            <label className="block" htmlFor="">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              className="border w-full py-2 px-3 rounded-md"
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
            />
          </div>

          <div className="">
            <label className="block" htmlFor="">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border w-full py-2 px-3 rounded-md"
              required
              onChange={changeHandler}
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
            />
          </div>

          <div className="">
            <label className="block" htmlFor="">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <InputMask
              mask="03999999999"
              className="border w-full py-2 px-3 rounded-md"
              required
              onChange={changeHandler}
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
            />
          </div>

          <div className="">
            <label className="block" htmlFor="">
              Email
            </label>
            <input
              type="email"
              className="border w-full py-2 px-3 rounded-md"
              onChange={changeHandler}
              name="email"
              value={formData.email}
              placeholder="Email"
            />
          </div>

          <div className="col-span-2">
            <label className="block" htmlFor="">
              Town / City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border w-full py-2 px-3 rounded-md"
              required
              onChange={changeHandler}
              name="city"
              value={formData.city}
              placeholder="City"
            />
          </div>

          <div className="col-span-2">
            <label className="block" htmlFor="">
              Street Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border w-full py-2 px-3 rounded-md"
              required
              onChange={changeHandler}
              name="address"
              value={formData.address}
              placeholder="Adress"
            />
          </div>
        </div>

        <aside className="col-span-5 lg:col-span-2 bg-gray-200 p-4 flex flex-col rounded-md">

          <h2 className="col-span-2 mb-4 font-semibold text-2xl text-center">
            Your Order
          </h2>

          <div className="bg-white flex flex-col p-4 flex-1 rounded-md">

            <div className="flex justify-between border-b py-2 mb-2">
              <p className="font-bold">Product</p>
              <p className="font-bold">Sub Total</p>
            </div>

           <div className="flex-1">
            {cart?.cartItems.map((v, i) => {
              return (
                <div key={i} className="flex items-center my-4 justify-between">
                  <div className="flex gap-1 items-center">
                    <div>
                      <i onClick={()=>removeItemFromCart(v._id)} className="bx hover:bg-gray-200 text-gray-600 cursor-pointer p-[2px] rounded-full text-xl bx-x"></i>
                    </div>
                    <img
                      className="w-10"
                      src={v.feturedImage?.url}
                      alt=""
                    />
                    <div>
                    <p className="line-clamp-1 font-bold">
                      {v.title}
                    </p>
                        {v.quantity} items x {v.price}
                    </div>
                  </div>

                  <p className="whitespace-nowrap">Rs {v.total}</p>
                </div>
              );
            })}</div>

            <div className="flex justify-between border-t py-2">
              <p className="font-bold text-xl">Total</p>
              <p className="font-bold text-xl">Rs {cart.cartTotal}</p>
            </div>

          </div>


          <button className="py-3 px-3 w-full bg-red-700 my-4 text-white rounded-md">Place Order</button>
        </aside>


      </form>
    </div>
  );
};

export default Page;
