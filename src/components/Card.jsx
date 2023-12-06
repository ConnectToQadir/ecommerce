import React from 'react'
import Link from 'next/link'
import AddToCartIcon from './AddToCartIcon'

const Card = ({product}) => {


  return (
    <div className='group' >


        <div className='mb-2 overflow-hidden relative'>

            <Link href={`/products/${product._id}`} >
            <img className='w-full' src={product.feturedImage.url} alt="" />
            </Link>

            <div className='absolute transition-all duration-500 group-hover:translate-x-0 translate-x-[150%] top-2 right-2 flex flex-col' >

                <AddToCartIcon product={product}  />

                <i className="bx cursor-pointer text-xl bg-white m-1 p-2 bx-heart"></i>
            </div>

        </div>


        <div>
            <h2 className='text-lg font-semibold line-clamp-2' >{product.title}</h2>
            <div className='py-1' >
                <i className="bx text-orange-600 bxs-star"></i>
                <i className="bx text-orange-600 bxs-star"></i>
                <i className="bx text-orange-600 bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
            </div>
            <p className='text-lg font-bold' >Rs{product.price}</p>
        </div>
    </div>
  )
}

export default Card