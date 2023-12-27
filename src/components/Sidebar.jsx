'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    var pathname = usePathname()

  return (
    <div>
        <ul className='p-3'>
            <li>
                <Link className={`py-1 my-1 ${pathname == "/admin" && "bg-gray-200 font-semibold"}  block p-2 rounded-md`} href="/admin"><i className="bx mx-2 bx-home"></i>Home</Link>
            </li>
            <li>
                <Link className={`py-1 my-1 ${pathname == "/admin/orders" && "bg-gray-200 font-semibold"}  block p-2 rounded-md`} href="/admin/orders"><i className="bx mx-2 bx-cart"></i>Orders</Link>
            </li>
            <li>
                <Link className={`py-1 my-1 ${pathname == "/admin/products" && "bg-gray-200 font-semibold"}  block p-2 rounded-md`} href="/admin/products"><i className="bx mx-2 bx-tag"></i>Products</Link>
            </li>
            <li>
                <Link className={`py-1 my-1 ${pathname == "/admin/analytics" && "bg-gray-200 font-semibold"}  block p-2 rounded-md`} href="/admin/analytics"><i className="bx mx-2 bx-chart"></i>Analytics</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar