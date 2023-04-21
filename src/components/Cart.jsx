import React, { useState } from 'react'
import CartItem from './CartItem'
import { products } from '../assets/products';
import { Link } from 'react-router-dom';
import Form from './Form';



export default function Cart({cartItems , changeCart}) {

  const [checkedOut, setCheckedOut] = useState(false)

  function getTotal(){
    let total = 0
    products.forEach(product => {
      if(cartItems[product.id] > 0){
        total += cartItems[product.id] * product.price
      }
    })
    return total
  }

  function checkOut(){
    if(getTotal() > 0){
      setCheckedOut(true)
    }
  }

  return (
    <div className='cart'>
      {products.map(product => {
        if(cartItems[product.id] > 0){
          return <CartItem key={product.id} data={product} count={cartItems[product.id]} changeCart={changeCart} />
        }
      })}
      <footer>
        <p>total: {getTotal()}$</p>
        <div>
          <button><Link to="/">continue shopping</Link></button>
          <button onClick={checkOut}>check out</button>
        </div>
      </footer>
      {(checkedOut)  && <Form />}
    </div>
  )
}
