import React from 'react'
import './BuildExperience.css'
import circle from '../assets/circle.png'
function BuildExperience() {
  return (
    <div className='buildexperience-container'>

    <div className='build-text-container'>
    <h1 className='build-text'>HIGHEST SUCCESS RATES</h1>
    <p className='build-paragraph'>Lorem Ipsum nibh vel velit auctor aliqu. <br/>Aenean sollic tudin, lorem is simply <br/>free text quis bibendum..</p>
    </div>
    <div className='build-box'>
<img src={circle} className='build-image'/>
    </div>
    <div className='build-text-container'>
    <h1 className='build-text'>WE BUILD EXPERIENCE</h1>
    <p className='build-paragraph'>Lorem Ipsum nibh vel velit auctor aliqu. <br/>Aenean sollic tudin, lorem is simply <br/>free text quis bibendum..</p>
    </div>
    <div className='build-box'>
    <img src={circle} className='build-image'/>
    </div>
    <div className='build-text-container-2'>
        <p className='build-paragraph-2'>There are many variations of passages of lorem ipsum available, <br/>but the majority have suffered alteration in some form injected <br/>humour or randomised words which don't look believable.</p>
        <div className='build-text-container-3'>
<small className='build-small'>If you are going to use a passage</small><br/>
<small  className='build-small'>Lorem Ipsum you need to be sure</small><br/>
<small className='build-small'>There isn't anything embarrassing</small><br/>
<small className='build-small'>Hidden in the middle of text</small>
</div>
    </div>
    
</div>
    
    
  )
}

export default BuildExperience