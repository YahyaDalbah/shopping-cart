import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
