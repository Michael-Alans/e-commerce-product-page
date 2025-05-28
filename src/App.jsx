import React from "react";
import Header from "./components/Header";
import ProductGallery from "./components/Product-gallery";
import { useState } from "react";


export default function App() {

  const [showCart, setShowCart] = useState(false)

  function toggleCart() {
    setShowCart(prev => !prev)
  }

  const [count, setCount] = useState(0)


  const [cartItem, setCartItem] = useState(null)
  const handleAddToCart = (quantity)=> {
    if(quantity === 0) return;

    const product = {
      price : 125,
      quantity,
    }

    setCartItem(product)

  }

  return(

    
      <div className="page-container">
         <Header count={count} toggleCart={toggleCart} />
         <ProductGallery count={count}  setCount={setCount} 
         handleAddToCart={ handleAddToCart} cartItem={cartItem}
         showCart={showCart}
        />
      </div>
    

  )
}