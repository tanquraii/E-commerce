import React from 'react'
import BigShoe from './images/image-product-1-thumbnail.jpg'
import LittleShoe1 from './images/image-product-2-thumbnail.jpg'
import LittleShoe2 from './images/image-product-3-thumbnail.jpg'
import LittleShoe3 from './images/image-product-4-thumbnail.jpg'
import VeryBigShoe from './images/image-product-1.jpg'
import Buttons from './Buttons'
import { useState } from 'react'
const Body = () => {
  const [image,setImage] = useState(VeryBigShoe);
  function changeImage(kartinka){
    setImage(kartinka);
  }
  return (
    <body>
      <div className='container'>
        <span className='images'>
          <div className="top">
            <img src={image} alt="bigshoe" />
          </div>
          <div className="bottom">
            <img onClick = {changeImage(BigShoe)} src={BigShoe} alt="bigshoe" />
            <img onClick = {changeImage(LittleShoe1)} src={LittleShoe1} alt="lilshoe" />
            <img src={LittleShoe2} alt="lilshoe" />
            <img src={LittleShoe3} alt="lilshoe" />
          </div>
        </span>
        
        <span className='text'>
          <h3>SNEAKER COMPANY</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <h6>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</h6>
          
          <div className="price">
            <span className="top">
              <h2>$125.00</h2>
              <div className="orange">50%</div>
            </span>
            <h5>$250.00</h5>
          </div>
          
          <Buttons/>
        </span>
      </div>
    </body>
  )
}

export default Body
