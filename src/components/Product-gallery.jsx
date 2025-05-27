import {React, useState} from "react";
import prev from "/images/icon-previous.svg"
import next from "/images/icon-next.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"
import cart from "/images/icon-cart.svg"


export default function ProductGallery() {

     
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
    

    return(
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
              <h1>Fall Limited Edition Sneakers</h1>
                <p id="These-low-profile">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

            <div className="price-container">
             <div style={{display: "flex", alignItems: "center"}}>
               <span className="current-price">$125.00</span>
              <span className="discount-badge">50%</span>
             </div>
             <span className="original-price">$250.00</span>
           </div>

           <div className="cart-controls">
            <div className="quantity-selector">
             <button id="decrease"><img src={minus} alt="" /></button>
            <span id="quantity">12</span>
           <button id="increase"><img src={plus} alt="" /></button>
           </div>
            <button id="add-to-cart">
             <img src={cart} alt="Cart Icon" />
             Add to cart
            </button>
           </div>
         </div>

        </main>
    )
}