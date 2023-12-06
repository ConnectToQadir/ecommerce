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
        var existedItem = cartCopy.filter(v=> v._id == item._id)


        if(existedItem.length){
            // increase quantity
            cartCopy = cartCopy.map(v=>{
                if(v._id == item._id){
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


        setCart({cartItems:cartCopy,cartTotal:total,totalItems})
        window.localStorage.setItem("cart",JSON.stringify({...cart,cartTotal:total,totalItems}))

    }


    const removeItemFromCart = (id) =>{


        var cartCopy = cart.cartItems
        cartCopy =  cartCopy.filter(v=>v._id != id)
        

        var total = 0
        cartCopy.forEach((v)=>{
            total = total + v.total
        })

        var totalItems = 0
        cartCopy.forEach((v)=>{
            totalItems = totalItems + v.quantity
        })


        setCart({cartItems:cartCopy,cartTotal:total,totalItems})
        window.localStorage.setItem("cart",JSON.stringify({cartItems:cartCopy,cartTotal:total,totalItems}))
        
    }


    const decreseItemQuantity = (item) =>{


        var cartCopy = cart.cartItems
        var existedItem = cartCopy.filter(v=> v._id == item._id)


        if(existedItem[0].quantity != 1){
            // increase quantity
            cartCopy = cartCopy.map(v=>{
                if(v._id == item._id){
                    v.quantity = v.quantity-1
                    v.total = Math.round(v.quantity * v.price)
                }
                return v
            })

        }else{
            cartCopy = cartCopy.filter(v=> v._id != item._id )
        }


        var total = 0
        cartCopy.forEach((v)=>{
            total = total + v.total
        })

        var totalItems = 0
        cartCopy.forEach((v)=>{
            totalItems = totalItems + v.quantity
        })


        setCart({cartItems:cartCopy,cartTotal:total,totalItems})
        window.localStorage.setItem("cart",JSON.stringify({cartItems:cartCopy,cartTotal:total,totalItems}))

    }


    useEffect(()=>{
        if(window.localStorage.cart){
            setCart(JSON.parse(window.localStorage.cart))
        }
    },[])


  return (
    <GlobalData.Provider value={{cart,setCart,addToCart,removeItemFromCart,decreseItemQuantity}} >
        {children}
    </GlobalData.Provider>
  )
}

export default Context