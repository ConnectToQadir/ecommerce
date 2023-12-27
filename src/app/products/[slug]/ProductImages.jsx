"use client";

import { useState } from "react";

const ProductImages = ({ fImage, rImages }) => {
  var [selectedImage, setSelectedImage] = useState(fImage.url);

  return (
    <div className="">
      {/* Selected Image */}
      <div className="">
        <img className="w-full" src={selectedImage} alt={fImage.altText} />
      </div>

      {/* Other Images */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {rImages.map((v, i) => {
          return (
            <div key={i} >
              <img
                className="w-full hover:opacity-50 cursor-pointer"
                src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                alt=""
                onClick={() =>
                  setSelectedImage(
                    "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
