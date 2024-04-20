import React from 'react'
import LittleShoe1 from './images/image-product-2.jpg'
import LittleShoe2 from './images/image-product-3.jpg'
import LittleShoe3 from './images/image-product-4.jpg'
import VeryBigShoe from './images/image-product-1.jpg'
import Buttons from './Buttons'
import { useState } from 'react'

const Body = () => {
  const [image,setImage] = useState(VeryBigShoe);

  const changeImage = (kartinka)=>{
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
            <img className = {image === VeryBigShoe?'buttonClicked':'buttonUnclicked'} onClick = {()=>changeImage(VeryBigShoe)} src={VeryBigShoe} alt="bigshoe" />
            <img className = {image === LittleShoe1?'buttonClicked':'buttonUnclicked'} onClick = {()=>changeImage(LittleShoe1)} src={LittleShoe1} alt="lilshoe" />
            <img className = {image === LittleShoe2?'buttonClicked':'buttonUnclicked'} onClick = {()=>changeImage(LittleShoe2)} src={LittleShoe2} alt="lilshoe" />
            <img className = {image === LittleShoe3?'buttonClicked':'buttonUnclicked'} onClick = {()=>changeImage(LittleShoe3)}  src={LittleShoe3} alt="lilshoe" />
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
