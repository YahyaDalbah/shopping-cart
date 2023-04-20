import React, { useState } from 'react'
import $1 from '../assets/1.png'

export default function CartItem({ data, changeCart, count }) {
  const [num, setNum] = useState(count)
  console.log(typeof num)
  return (
    <div className='cart-item'>
        <img src={data.image} />
        <div>
            <h1>{data.title}</h1>
            <p>price: {data.price}$</p>
            <input type="number" value={num} onChange={e => {
              changeCart(data.id, parseInt(e.target.value))
              setNum(parseInt(e.target.value))
            }} />
        </div>
    </div>
  )
}
