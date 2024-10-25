import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'



const Product = ({ product }) => {
    return (

      <Link to = {`product/${product._id}`}>

<div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={`${product.image}`}
                    alt={`${product.name}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className='line-clamp-2'>{product.description}</p>

                <div>
                    <Rating value= {product.rating} text = {product.numReviews}/>
                </div>
                <h2 className='cardd-title badge badge-primary mb-3'>
                    {product.price}
                </h2>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
      
      
      </Link>
      
    )
}

export default Product