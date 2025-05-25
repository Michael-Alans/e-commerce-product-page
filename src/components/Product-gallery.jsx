import {React, useState} from "react";



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
    

    return(
        <main className="image-gallery">
            
           <section>
              <div className="large-image" >
                <img src={selectedImage} alt="" />
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

           <section className="product-details">
             <p id="sneaker-company">SNEAkER COMPANY</p>

             <h1>Fall Limited Edition Sneakers</h1>

              <p>These low-profile sneakers are your perfect casual 
                wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>

              <h3>$125.00 <span>50%</span></h3>
              <p>$250.00</p>
            </section>
        </main>
    )
}