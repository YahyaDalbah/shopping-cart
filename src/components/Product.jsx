import React, { useState } from 'react'

export default function Product({ product, addToCart, cartItems }) {

  return (
    <div className='product'>
        <img src={product.image} />
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product.id)}>add to cart ({cartItems[product.id]})</button>
        </div>
    </div>
  )
}
