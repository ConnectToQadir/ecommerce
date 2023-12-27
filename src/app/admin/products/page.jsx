"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Page = () => {

  var [products,setProducts] = useState([])

  async function fectchProducts(){
     var res = await axios.get("/api/products")
     setProducts(res.data.message)
  }


  useEffect(()=>{
    fectchProducts()
  },[])


  async function deleteProduct(id){

    if(!window.confirm("Are you sure?")){
      return
    }

    var res = await axios.delete(`/api/products?id=${id}`)
    if(res.data.success){
      alert(res.data.message)
      fectchProducts()
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
              Product
            </th>
            <th className='py-2 px-2' >Stock</th>
            <th className='py-2 px-2' >Price</th>
            <th className='py-2 px-2' >Category</th>
            <th className='py-2 px-2' >Actions</th>
          </tr>
        </thead>


        <tbody>

          {
            products.map((v,i)=>{
              return(
                <tr key={i} className='border-b'>
                  <td className='py-1 px-2 flex items-center' >
                    <img className='w-16 mr-2' src={v.feturedImage.url} alt="" />
                    {v.title}
                  </td>
                  <td className='py-1 px-2 text-center' >{v.price}</td>
                  <td className='py-1 px-2 text-center' >{v.stock}</td>
                  <td className='py-1 px-2 text-center' >{v.category}</td>
                  <td className='text-center text-xl'>

                    <Link href={`/admin/products/edit/${v._id}`} >
                      <i className="bx p-1 bx-edit"></i>
                    </Link>

                    <i onClick={()=>deleteProduct(v._id)} className="bx p-1 bx-trash"></i>
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