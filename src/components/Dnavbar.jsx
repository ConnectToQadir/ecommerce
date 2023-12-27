"use client"
import React from 'react'

const Dnavbar = () => {
  return (
    <div className='flex justify-between items-center w-full px-4'>
        <img className='w-8' src="https://cdn.shopify.com/shopifycloud/web/assets/v1/cc7aecbbdffa98a5.svg" alt="" />
        <div>
          <div className='flex items-center gap-2'>
            <img className='w-8 h-8 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h2>Username</h2>
          </div>
        </div>
    </div>
  )
}

export default Dnavbar