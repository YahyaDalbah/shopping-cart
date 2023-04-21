import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { products } from "./assets/products";

function getCart(){
  const cart = {}
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

function App() {

  const [cartItems, setCartItems] = useState(getCart())

  function addToCart(id){
    setCartItems(prev => ({...prev, [id]: prev[id] + 1}))
  }
  
  function changeCart(id, num){
    setCartItems(prev => ({...prev, [id]: num > 0 ? num : 0}))
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Products cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} changeCart={changeCart} />} />
      </Routes>
    </>
  );
}

export default App;
