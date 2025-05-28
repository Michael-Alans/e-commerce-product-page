import {React, useState, useEffect} from "react";
import prev from "/images/icon-previous.svg"
import next from "/images/icon-next.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"
import cart from "/images/icon-cart.svg"
import deleteIcon from "/images/icon-delete.svg"


export default function ProductGallery({count, setCount, cartItem, handleAddToCart, showCart}) {

     
    const productImages = [
        {
            full:"/images/image-product-1.jpg",
            thumb:"/images/image-product-1-thumbnail.jpg"
        },

        {
            full:"/images/image-product-2.jpg",
            thumb:"/images/image-product-2-thumbnail.jpg"
        },

        {
            full:"/images/image-product-3.jpg",
            thumb:"/images/image-product-3-thumbnail.jpg"
        },

        {
            full:"/images/image-product-4.jpg",
            thumb:"/images/image-product-4-thumbnail.jpg"
        }
    ]

    const [selectedImage, setSelectedImage] = useState(productImages[0].full)

    const [currentIndex, setCurrentIndex] = useState(0);
    const selectedImageMobile = productImages[currentIndex].full;

   const goToNext = () => {
   setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
   };

  const goToPrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
  };

  const isMobile = window.matchMedia("(max-width:768px)").matches;
  
  
  const [currentProduct, setCurrentProduct] = useState({
    id: 1,
    title: "Fall Limited Edition Sneakers",
    price: "$125",
    discount: "50%",
    originalPrice: "$250",
    image: productImages[0].thumb
  });
  

  
    const increment = ()=> {
      setCount (prevCount => prevCount + 1)
    }
  
    const decrement = ()=> {
      setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)

    }
  
    

    

    return(

        <>

          <div className="cart-container">
          { cartItem && showCart? (
          <div>
            <div className="cart-section">
             <header><h3>Cart</h3></header>
             <div className="added-items">
              <div>
                <img src={currentProduct.image}/>
              </div>

              <div className="item-details">
                <h3>{currentProduct.title}</h3>
                <p>${cartItem.price} x {cartItem.quantity} = <strong>${cartItem.price * cartItem.quantity}</strong></p>
              </div>
              <img src={deleteIcon} alt="" style={{height:"15px", width:"15px"}} />
            </div>

            <button id="check-out" className="add-to-cart" /* Note that the name "add-to-cart has nothing to do with the functinality of the button, it is just having same classnmae with the add-to-cart button" */>
              Check out
            </button>

          </div>
          </div>): null}
          </div>

        <main className="image-gallery">
           <section>
              <div className="large-image" >
                <img src={isMobile? selectedImageMobile: selectedImage} alt="" id="selected-image"/>
                <img src={prev} id="prev" onClick={goToPrev} />
                <img src={next} alt="" id="next" onClick={goToNext}/>
              </div>

              <div className="thumbnails">
                {productImages.map((img, index)=> 
                    <img  
                        key={index}    
                        src={img.thumb}
                        onClick={() => setSelectedImage(img.full)}
                        className="thumbnail"
                    />)
                }
              </div>
           </section>

          <div className="product-details">
            <p id="sneaker-company">SNEAKER COMPANY</p>
              <h1>{currentProduct.title}</h1>
                <p id="These-low-profile">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

            <div className="price-container">
             <div style={{display: "flex", alignItems: "center"}}>
               <span className="current-price">{currentProduct.price}</span>
              <span className="discount-badge">{currentProduct.discount}</span>
             </div>
             <span className="original-price">{currentProduct.originalPrice}</span>
           </div>

           <div className="cart-controls">
            <div className="quantity-selector">
             <button id="decrease" onClick={decrement}><img src={minus} alt="" /></button>
            <span id="quantity">{count}</span>
           <button id="increase" onClick={increment}><img src={plus} alt="" /></button>
           </div>
            <button className="add-to-cart" onClick={()=>handleAddToCart(count)}>
             <img src={cart} alt="Cart Icon" />
             Add to cart
            </button>
           </div>
         </div>

        </main>
      </>  
    )
}