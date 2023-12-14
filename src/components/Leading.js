import React from 'react'
import './Leading.css'
import { MdOutlinePhone } from "react-icons/md";
import video from '../assets/video .mp4'
function Leading() {
  return (
    <div className='leading-container'>
        <video src={video} controls className='video'/>
<div className='text-container-4'>
<h1 className='text-5'>WE ARE LEADING IN <br/>THE MARKET</h1>
<p className='p'>Lorem ipsum is simply free text dolor sit amet, consectetur notted <br/>adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore <br/>magna aliqua lonm andhn.  </p>
<p className='paragraph-6'>We have 35+ years of experience. We offer <br/> marketing and consulting services
</p>
<div className="progress-container">
    <div className="progress-bar">
      <div className="progress-indicator" style={{width:"88%"}}></div>
    </div>
    <div className="progress-text">Consulting</div>
  </div>
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-indicator" style={{width:"68%"}}></div>
    </div>
    <div className="progress-text">Advice</div>
  </div>
  <div className='phone-container'>
  <div className='phone-icon'>
  <MdOutlinePhone style={{margintop: '5px',
    marginleft: '6px'}} className='icon'/>
    
  </div>
  <span className='question'>Have any question? Give us a call <br/>03444590587</span>

  </div>

</div>
    </div>
  )
}

export default Leading