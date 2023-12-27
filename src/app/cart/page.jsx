"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { GlobalData } from "@/src/Context/Context";

const Cart = () => {
  const { cart,addToCart,removeItemFromCart,decreseItemQuantity } = useContext(GlobalData);

  return (
    <div className="p-4">
      <div className="max-w-6xl py-10 grid grid-cols-6 gap-8 mx-auto">
        {/* product Table */}
        <div className="col-span-4">
          <table className=" border-red-600 w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left py-4">Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.cartItems.map((v, i) => {
                return (
                  <tr key={i} className="my-4 border-b">
                    <td>
                      <div className="grid grid-cols-4 py-4 items-center">
                        <div className="mr-3 col-span-1">
                          <img
                            className="w-full"
                            src={v.feturedImage?.url}
                            alt=""
                          />
                        </div>
                        <div className="col-span-3">
                          <h2 className="font-bold line-clamp-1">{v.title}</h2>
                          <p>Rs{v.price}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center px-4 text-2xl">
                        <button onClick={()=>decreseItemQuantity(v)} className="">-</button>
                        <span className="mx-4">{v.quantity}</span>
                        <button onClick={()=>addToCart(v)} className="">+</button>
                      </div>
                    </td>
                    <td className="text-center px-4">Rs{v.total}</td>
                    <td className="text-center px-8">
                      <i onClick={()=>removeItemFromCart(v._id)} className="bx text-2xl p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full bx-x"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Proceed Checkout */}
        <div className="col-span-2">
          <div className="bg-gray-100 p-4">
            <h2 className="font-bold text-xl mb-2">Cart Total</h2>

            <div className="flex py-2 items-center justify-between">
              <div>Subtotal</div>
              <div className="text-red-600">Rs {cart.cartTotal}</div>
            </div>

            <div className="flex py-2 items-center justify-between">
              <div>Tax</div>
              <div className="text-red-600">Rs 0</div>
            </div>

            <div className="flex py-2 items-center justify-between">
              <div>Shipping Charges</div>
              <div className="text-red-600">Rs 0</div>
            </div>

            <div className="flex py-2 items-center justify-between">
              <div>Total</div>
              <div className="text-red-600">Rs {cart.cartTotal}</div>
            </div>

            <Link
              className="bg-black block p-2 mt-4 text-white text-center"
              href="/checkout"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
