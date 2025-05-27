import React from "react";
import Header from "./components/Header";
import ProductGallery from "./components/Product-gallery";
import { useState } from "react";


export default function App() {

  const [count, setCount] = useState(0)

  return(

    
      <div className="page-container">
         <Header count={count}/>
         <ProductGallery count={count}  setCount={setCount}/>
      </div>
    

  )
}