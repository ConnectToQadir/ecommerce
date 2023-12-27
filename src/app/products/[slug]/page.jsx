import axios from "axios"
import ProductImages from "./ProductImages"
import Quantity from "./Quantity"



async function findProductById(id){
  var res = await axios.get(`http://localhost:3000/api/products?id=${id}`)
  return res.data.message[0]
}



const page = async (props) => {

  var product = await findProductById(props.params.slug)

  return (
    <div className='px-4'>
        
        <div className='max-w-6xl py-10 mx-auto gap-4 grid grid-cols-1  md:grid-cols-2'>

            <ProductImages fImage={product.feturedImage} rImages={product.relatedImages} />

            <div className=''>

                <h2 className='text-3xl font-bold mb-4' >{product.title}</h2>

                <p className='text-2xl font-semibold text-red-600'>
                    <strike className='text-gray-400 text-xl' >Rs 159.00</strike>
                    <span> Rs {product.price}</span>
                </p>


                <Quantity product={product} />
              

            </div>



        </div>

    </div>
  )
}

export default page