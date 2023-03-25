import React from 'react'
import SlideImg from '../../../assets/slide.png'
const HeroSec = () => { 
  return (
    <>
    
    <div className="carousel w-full h-15">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={SlideImg} className="w-full  object-contain" alt='slider' />
    <h1 class="absolute text-5xl text-yellow top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2">
            BUY NOW</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={SlideImg} className="w-full  object-contain" alt='slider' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  


</div>

    </>
  )
}

export default HeroSec