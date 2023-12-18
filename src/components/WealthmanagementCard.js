import React from 'react'
import './WealthmanagementCard.css'
import image from '../assets/image.png'
import download from '../assets/download.jpg'
import download1 from '../assets/download (1).jpg'
import download2 from '../assets/download-2.jpg'
import Carousal from './Carousal'
function WealthmanagementCard() {
  const slides = [
    { image: download },
    { image: download1 },
    { image: download2 },
    // Add more slides as needed
  ];


  return (
    <div className='wealth-container'>
      <div className='text-container-2'>
        <h1 className='text-3'>REAL-WORLD EXPERIENCE</h1>
        <small className='small'>The Best Business is consulting firm you can count on !</small>
      </div>
      <div className='card-container'>
        <div className='card'>
          <h1 className='text-4'>Wealth <br />Management</h1>
          <small className='small-2'>Read More</small>
          <img src={image} className='img' />
        </div>
        <div className='card'>
          <h1 className='text-4'>Wealth <br />Management</h1>
          <small className='small-2'>Read More</small>
          <img src={image} className='img' />
        </div>
        <div className='card'>
          <h1 className='text-4'>Wealth <br />Management</h1>
          <small className='small-2'>Read More</small>
          <img src={image} className='img' />
        </div>
      </div>
      <Carousal slides={slides} />
    </div>
  )
}

export default WealthmanagementCard