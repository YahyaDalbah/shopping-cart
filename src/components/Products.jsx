import React from 'react'
import { products } from '../assets/products'
import Product from './Product'

export default function Products({ addToCart, cartItems }) {
  return (
    <main>
        {products.map(product => <Product key={product.id} product={product} addToCart={addToCart} cartItems={cartItems} />)}
    </main>
  )
}
