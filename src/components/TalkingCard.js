import React from 'react'
import './TalkingCard.css'
import arrow from '../assets/arrow (1).png'
import arrow2 from '../assets/arrow (2).png'
function TalkingCard() {
  return (
    <div className='talk-container'>
      <div className='trust-container'>
        <h1 className='talk'>WHAT THEY <br />ARE TALKING <br />ABOUT?</h1>
        <p className='paragaraph-9'>Trusted by more than 4,200 customers</p>
        <div className='radius-container'>
          <div className='radius-image' >
            <img src={arrow2} className='img-3' />
          </div>
          <div className='radius-image'>
            <img src={arrow} className='img-3' />

          </div>
        </div>

      </div>
      <div className='card-container-2'>
        <div className='card-3'>
          <p className='paragaraph-8'>Lorem ipsum is simply free text dolor sit amet,<br /> consectetur notted adipisicing elit sed do<br /> eiusmod tempor incididunt ut labore et dolore<br /> magna aliqua.Lorem ipsum is simply free text <br />dolor sit amet,consectetur notted adipisicing elit <br />sed do eiusmod tempor</p>
          <h4>Todd Higgins</h4>
          <small className='samall-8'>Customer</small>

        </div>
        <div className='card-3'>
          <p className='paragaraph-8'>Lorem ipsum is simply free text dolor sit amet,<br /> consectetur notted adipisicing elit sed do<br /> eiusmod tempor incididunt ut labore et dolore<br /> magna aliqua.Lorem ipsum is simply free text <br />dolor sit amet,consectetur notted adipisicing elit <br />sed do eiusmod tempor</p>
          <h4>Todd Higgins</h4>
          <small className='samall-8'>Customer</small>

        </div>
      </div>
    </div>
  )
}

export default TalkingCard