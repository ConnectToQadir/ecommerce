"use client"

import { useEffect, useState } from "react"


const Page = () => {

    var [num,setNum] = useState(0)


    useEffect(()=>{
        alert(num)
    },[num])


    const clickHandle = () =>{
        setNum(num+1)
    }

  return (
    <div>
        <h2>State Understanding</h2>
        <button onClick={clickHandle} >Inc</button>
    </div>
  )
}

export default Page