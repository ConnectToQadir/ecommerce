"use client";

import axios from "axios";
import { useEffect, useState } from "react";


const Page = ({params}) => {

    var [order,setOrder] = useState({})

    var fetchOrder = async () =>{
        var {data} = await axios.get(`/api/orders?id=${params.id}`)
        setOrder(data.message[0])
    }

    useEffect(()=>{
        fetchOrder()
    },[])


  return (
    <div className="px-4">
      <div  className="max-w-6xl mx-auto grid gap-6 grid-cols-5  py-10">


        <div className="col-span-5 lg:col-span-3">
            <div className="grid grid-cols-2 gap-6">
            <h2 className="col-span-2 font-semibold text-2xl">
                Customer Details
            </h2>

            <div className="">
                <label className="block" htmlFor="">
                First Name
                </label>
                <div className="text-xl font-bold">
                    {order?.customerDetail?.firstName}
                </div>
            
            </div>

            <div className="">
                <label className="block" htmlFor="">
                Last Name
                </label>
                <div className="text-xl font-bold">
                    {order?.customerDetail?.lastName}
                </div>
            
            </div>

            <div className="">
                <label className="block" htmlFor="">
                Phone Number
                </label>
                <div className="text-xl font-bold">
                    {order?.customerDetail?.phone}
                </div>
            
            </div>

            <div className="">
                <label className="block" htmlFor="">
                Email
                </label>
                <div className="text-xl font-bold">
                    {order?.customerDetail?.email}
                </div>
            </div>

            <div className="col-span-2">
                <label className="block" htmlFor="">
                Town / City
                </label>
                <div className="text-xl font-bold">
                    {order?.customerDetail?.city}
                </div>
            
            </div>

            <div className="col-span-2">
                <label className="block" htmlFor="">
                Street Address
                </label>
                <div className="text-xl font-bold">
                    {order?.customerDetail?.address}
                </div>
            
            </div>
            </div>
        </div>

        <aside className="col-span-5 lg:col-span-2 bg-gray-200 p-4 flex flex-col rounded-md">

          <h2 className="col-span-2 mb-4 font-semibold text-2xl text-center">
            Ordered Products
          </h2>

          <div className="bg-white flex flex-col p-4 flex-1 rounded-md">

            <div className="flex justify-between border-b py-2 mb-2">
              <p className="font-bold">Product</p>
              <p className="font-bold">Sub Total</p>
            </div>

           <div className="flex-1">
            {order?.items?.map((v, i) => {
              return (
                <div key={i} className="flex items-center my-4 justify-between">
                  <div className="flex gap-1 items-center">
                    
                    <img
                      className="w-10"
                      src={v.productID?.feturedImage?.url}
                      alt=""
                    />
                    <div>
                    <p className="line-clamp-1 font-bold">
                      {v.productID?.title}
                    </p>
                        {v.quantity} items x {v.unitPrice}
                    </div>
                  </div>

                  <p className="whitespace-nowrap">Rs {v.quantity * v.unitPrice}</p>
                </div>
              );
            })}</div>

            <div className="flex justify-between border-t py-2">
              <p className="font-bold text-xl">Total</p>
              <p className="font-bold text-xl">Rs {order?.total}</p>
            </div>

          </div>

            <div className="flex items-center gap-1 my-4">
                <button className="py-3 px-3 flex-1 bg-red-700 text-white rounded-md">Pending Order</button>


                <div className="border p-2 border-red-600 flex rounded-md justify-center items-center h-full">
                    <i className="bx text-red-600 text-2xl bx-edit"></i>
                </div>
            </div>

        </aside>


      </div>
    </div>
  );
};

export default Page;
