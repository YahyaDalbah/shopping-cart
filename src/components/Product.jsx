import React from 'react'

export default function Product({ product }) {
  return (
    <div className='product'>
        <img src={product.image} />
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <button>add to cart</button>
        </div>
    </div>
  )
}
