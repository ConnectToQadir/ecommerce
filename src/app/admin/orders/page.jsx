"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Page = () => {

  var [orders,setOrders] = useState([])

  async function fectchOrders(){
     var res = await axios.get("/api/orders")
     setOrders(res.data.message)
  }


  useEffect(()=>{
    fectchOrders()
  },[])


  async function deleteOrder(id){

    if(!window.confirm("Are you sure?")){
      return
    }

    var res = await axios.delete(`/api/orders?id=${id}`)
    if(res.data.success){
      alert(res.data.message)
      fectchOrders()
    }
  }


  return (
    <div>


      <div className='flex py-4 justify-between items-center'>

        <div>filters</div>


        <div className='flex gap-2 items-center'>

          <form>
            <input type="search" placeholder='Search' className='border rounded-full py-2 px-3' />
          </form>

          <Link href="/admin/products/add-product">
            <i title='Add Product' className="bx p-1 rounded-full bg-blue-600 text-white bx-plus"></i>
          </Link>

        </div>

      </div>

      <table className='w-full'>


        <thead>
          <tr className='border-b bg-gray-100'>
          <th className='py-2 px-2 text-left'>
              Date
            </th>
            <th className='py-2 px-2 text-left'>
              Customer
            </th>
            <th className='py-2 px-2' >Phone</th>
            <th className='py-2 px-2' >Total</th>
            <th className='py-2 px-2' >Status</th>
            <th className='py-2 px-2' >Payment</th>
            <th className='py-2 px-2' >Actions</th>
          </tr>
        </thead>


        <tbody>

          {
            orders?.map((v,i)=>{
              return(
                <tr key={i} className='border-b'>
                  <td className='py-1 px-2 text-left' >{new Date(v.createdAt).toDateString()}</td>
                  <td className='py-1 px-2 text-left' >{v.customerDetail?.firstName + " " + v.customerDetail?.lastName}</td>
                  <td className='py-1 px-2 text-center' >{v.customerDetail?.phone}</td>
                  <td className='py-1 px-2 text-center' >{v.total}</td>
                  <td className='py-1 px-2 text-center' >{v.status}</td>
                  <td className='py-1 px-2 text-center' >{v.paymentStatus || "-"}</td>
                  <td className='text-center text-xl'>

                      <Link href={`/admin/orders/${v._id}`}>
                      <i className="bx p-1 bx-detail"></i>
                      </Link>

                    <i onClick={()=>deleteOrder(v._id)} className="bx p-1 bx-trash"></i>
                  </td>
              </tr>
              )
            })
          }


        </tbody>


      </table>

    </div>
  )
}

export default Page