import ProductImages from "./ProductImages"
import Quantity from "./Quantity"



const page = (props) => {

  var id = props.params.slug


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

  var selectedProduct = products.filter(v=>{
    return v._id == id
  }) 


  return (
    <div className='px-4'>
        
        <div className='max-w-6xl py-10 mx-auto gap-4 grid grid-cols-1  md:grid-cols-2'>

            <ProductImages url={selectedProduct[0].image} />

            {/* details */}
            <div className=''>

                <h2 className='text-3xl font-bold mb-4' >{selectedProduct[0].title}</h2>

                <p className='text-2xl font-semibold text-red-600'>
                    <strike className='text-gray-400 text-xl' >Rs159.00</strike>
                    <span> Rs{selectedProduct[0].price}</span>
                </p>


                {/* Add to Cart */}
                <Quantity product={selectedProduct[0]} />
              

            </div>



        </div>

    </div>
  )
}

export default page