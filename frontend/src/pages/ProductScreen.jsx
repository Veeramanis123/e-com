
import { useParams, Link } from 'react-router-dom'
// import products from '../../products'
import Rating from '../components/Rating';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { adToCard } from '../slices/cardSlice';



const ProductScreen = () => {

    const { id: productId } = useParams();

    
  const [qty , setQty] = useState(1);

  const dispatch = useDispatch();

    // const product = products.find((p) => p._id === productId);

    // const [product, setProduct] = useState({});

    
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);

    //         setProduct(data);
    //     }

    //     fetchProduct();

    // }, [productId])

    
  const { data:product, error, isLoading } = useGetProductDetailsQuery (productId);

  if(isLoading) return <p>Loding...</p>
  if(error) return <p>Error:{error.message}</p>


  const adToCardHandler = () => {

     dispatch(adToCard({...product , qty}));

  }




    return (
     
        // the own code

        // <div>
        //     <Link to="/">
        //         <button className="btn btn-neutral">GO Back</button>
        //     </Link>

        //     <div className='grid md:grid-cols-2 gap-10'>
        //         <div className='md:grid-cols-6'>

        //             <img src={product.image} alt="" />

        //         </div>
        //         <div className='md:grid-cols-6'>

        //             <div className="card">
        //                 <div className="card-body">
        //                     <h1 className="card-tittle">
        //                         {product.name}
        //                     </h1>
        //                     <p>
        //                         {product.description}
        //                     </p>
        //                     <p>
        //                         {product.price}
        //                     </p>
        //                     <div>
        //                         <Rating value={product.rating} text={product.numReviews} />
        //                     </div>

        //                     <p>
        //                         {product.countInStock > 0 ? "InStock" : "Out of Stock"}
        //                     </p>
        //                     <p>
        //                         {
        //                             product.countInStock > 0 && (
        //                                 <div>
        //                                     <h4>Qty</h4>
        //                                     <form>
        //                                         <select className="select select-primary w-full max-w-xs">
        //                                            {
        //                                             [...Array(product.countInStock).keys().map((item) => (

        //                                                 <option key={item + 1}>{item + 1}</option>

        //                                             ))]
        //                                            }
        //                                         </select>
        //                                     </form>
        //                                 </div>
        //                             )
        //                         }
        //                     </p>
        //                     <div className='card-actions'>
        //                     <button disabled = {product.countInStock === 0}  className="btn btn-primary">Add To Cart</button>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>

        // </div>

        // the chatGPT using style and heading,content properly

        <div>
    <Link to="/">
        <button className="btn btn-neutral mb-4">GO Back</button>
    </Link>

    <div className='grid md:grid-cols-2 gap-10'>
        <div className='flex justify-center items-center'>
            <img src={product.image} alt={product.name} className="max-w-full h-auto" />
        </div>
        <div className='flex flex-col'>
            <div className="card">
                <div className="card-body">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                        {product.name}
                    </h1>
                    <p className="mb-4">
                        {product.description}
                    </p>
                    <p className="text-lg font-bold mb-4">
                        {product.price}
                    </p>
                    <div className="mb-4">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </div>

                    <p className="mb-4">
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                    {product.countInStock > 0 && (
                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Qty</h4>
                            <select className="select select-primary w-full max-w-xs"
                            onChange={(e) => setQty(Number(e.target.value))}>
                                {
                                    [...Array(product.countInStock).keys()].map((item) => (
                                        <option key={item + 1}>{item + 1}</option>
                                    ))
                                }
                            </select>
                        </div>
                    )}
                    <div className='card-actions'>
                        <button 
                        
                        onClick={adToCardHandler}
                            disabled={product.countInStock === 0} 
                            className="btn btn-primary w-full"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default ProductScreen