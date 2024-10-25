

// import React, { useEffect, useState } from 'react'
// // import products from '../../products'

import Product from '../components/Product'

import { useGetProductsQuery } from '../slices/productsApiSlice'

// import axios from 'axios';


const HomeScreen = () => {

  // normal code (first)

  // const [products,setProducts] = useState([]);

  // useEffect(() => {
      
  //   const fetProducts = async () => {
  //     const { data }= await axios.get("http://localhost:5000/api/products")

  //     setProducts(data)
  //   }

  //   fetProducts();
  // },[])


  // Advance code

  const { data:products, error, isLoading } = useGetProductsQuery ();

  if(isLoading) return <p>Loding...</p>
  if(error) return <p>Error:{error.message}</p>



  return (

    <>
     <h1 className='text-5xl my-10'>All Products</h1>
     <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'> 

        {
            products.map((product) => (
                <Product key={product._id} product = {product}/>
            ))
        }
        
        
    </div>    
    </>
    
  )
}

export default HomeScreen