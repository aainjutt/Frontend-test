import React, { useState } from 'react'
import './Carousal.css'

const Carousal = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };


  return (
    <div className='carousel-container'>
      <h3 style={{ marginTop: '50px' }} className='about'>Meet the Partners</h3>
      <div className="carousel-container-2">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item">
              <img src={slide.image} alt={`Slide ${index + 1}`} className='carousel-image' />
              {slide.content}
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&#9665;</button>
        <button className="next" onClick={nextSlide}>&#9655;</button>
      </div>
    </div>
  )
}

export default Carousal