import React from "react";
import Card from "@/src/components/Card";
import axios from 'axios'

export const metadata = {
  title: "Apple",
  description: "Home Page",
};

// async function fectchProducts(){
//   var res = await axios.get("http://localhost:3000/api/products")
//   return res.data.message
// }


const page = async () => {

  // var products = await fectchProducts()
  var products = []



  return (
    <div className="max-w-6xl mx-auto py-10 px-4" >

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >

      {
        products.map((product,i) => {
          return (
            <Card key={i} product={product} />
          )
        })
      }

      </div>


    </div>
  );
};

export default page;
