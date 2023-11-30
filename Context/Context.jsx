"use client"

import {createContext, useEffect, useState} from 'react'


export const GlobalData = createContext()

const Context = ({children}) => {

    var [cart,setCart] = useState({
        cartItems:[],
        cartTotal:0,
        totalItems:0
    })


    const addToCart = (item) =>{

        var cartCopy = cart.cartItems

        var existedItem = cartCopy.filter(v=> v.id == item.id)

        if(existedItem.length){
            // increase quantity
            cartCopy = cartCopy.map(v=>{
                if(v.id == item.id){
                    v.quantity = v.quantity+1
                    v.total = Math.round(v.quantity * v.price)
                }
                return v
            })

        }else{

            // add to cart with quantity 1
            cartCopy.push({...item,quantity:1,total:Math.round(item.price)})
        }

        var total = 0
        cartCopy.forEach((v)=>{
            total = total + v.total
        })

        var totalItems = 0
        cartCopy.forEach((v)=>{
            totalItems = totalItems + v.quantity
        })

        setCart({cartItems:cartCopy,cartTotal:Math.round(total) ,totalItems})
        
        window.localStorage.setItem("cart",JSON.stringify({cartItems:cartCopy,cartTotal:total.toFixed(2) ,totalItems}))
    }


    useEffect(()=>{
        if(window.localStorage.cart){
            setCart(JSON.parse(window.localStorage.cart))
        }
    },[])


  return (
    <GlobalData.Provider value={{cart,setCart,addToCart}} >
        {children}
    </GlobalData.Provider>
  )
}

export default Context