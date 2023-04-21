import React from 'react'

export default function Form() {
  return (
    <div className='overlay'>
      <form className='checkout-form'>
          <input type="text" placeholder='your name' />
          <input type="text" placeholder='your email' />
          <button>submit</button>
      </form>
    </div>
  )
}
