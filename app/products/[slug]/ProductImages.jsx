'use client'

import { useState } from "react";

const ProductImages = ({url}) => {

  var [selectedImage,setSelectedImage] = useState(url)


  return (
    <div className="">
      {/* Selected Image */}
      <div className="">
        <img
          className="w-full"
          src={selectedImage}
          alt=""
        />
      </div>

      {/* Other Images */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <img
            className="w-full hover:opacity-50 cursor-pointer"
            src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
            alt=""
            onClick={()=>setSelectedImage("https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp")}
          />
        </div>
        <div>
          <img
            className="w-full hover:opacity-50 cursor-pointer"
            src="https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp"
            alt=""
            onClick={()=>setSelectedImage("https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp")}
          />
        </div>
        <div>
          <img
            className="w-full hover:opacity-50 cursor-pointer"
            src="https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp"
            alt=""
            onClick={()=>setSelectedImage("https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp")}

          />
        </div>
        <div>
          <img
            className="w-full hover:opacity-50 cursor-pointer"
            src="https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp"
            alt=""
            onClick={()=>setSelectedImage("https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp")}

          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
