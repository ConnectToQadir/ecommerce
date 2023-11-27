import React from "react";
import Card from "@/components/Card";

export const metadata = {
  title: "Apple",
  description: "Home Page",
};


const products = [
  {
    id: 1,
    title: "Adidas Ultraboost 21 Running Shoes Adidas Ultraboost 21 Running Shoes Adidas Ultraboost 21 Running Shoes Adidas Ultraboost 21 Running Shoes Adidas Ultraboost 21 Running Shoes",
    price: 159.99,
    image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg.webp"
  },
  {
    id: 2,
    title: "Nike Air Zoom Pegasus 38 Sneakers",
    price: 129.95,
    image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
  },
  {
    id: 3,
    title: "Reebok Classic Leather Casual Shoes",
    price: 79.99,
    image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg.webp"
  },
  {
    id: 4,
    title: "Puma RS-X3 Puzzle Fashion Sneakers",
    price: 109.95,
    image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg.webp"
  },
  {
    id: 5,
    title: "New Balance 990v5 Athletic Shoes",
    price: 174.99,
    image:"https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg.webp"
  },
  {
    id: 6,
    title: "Under Armour HOVR Phantom 2 Running Shoes",
    price: 139.99,
    image:"https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg.webp"
  },
  {
    id: 7,
    title: "Brooks Ghost 14 Road Running Shoes",
    price: 129.95,
    image:"https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg.webp"
  },
  {
    id: 8,
    title: "Saucony Jazz Original Vintage Sneakers",
    price: 64.95,
    image:"https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg.webp"
  },
];

const page = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4" >

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >

      {
        products.map(product => {
          return (
            <Card product={product} />
          )
        })
      }

      </div>


    </div>
  );
};

export default page;
