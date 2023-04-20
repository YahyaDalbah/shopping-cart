import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/shopping-cart.png'

export default function Nav() {
  return (
    <nav>
        <h1>YD store</h1>
        <div>
            <Link to={'/'}>Shop</Link>
            <Link to={'/cart'}><img src={image} alt="cart" /></Link>
        </div>
        
    </nav>

  )
}
