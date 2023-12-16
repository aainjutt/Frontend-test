import React from 'react';
import './BusinessGrowth.css'
import brain from '../assets/brain.png'
function BusinessGrowth() {
  return (
    <>
     <div className='business-growth-container'>
        <div className='brain-container'>
<div className='height'>
    <img src={brain} className='img-6'/>
    <h1 className='four'>420</h1>
    <small className='small-10'>CONSULTING SOLUTIONS</small>
</div>
<div className='height'>
    <img src={brain} className='img-6'/>
    <h1 className='four'>420</h1>

    <small className='small-10'>CONSULTING SOLUTIONS</small>
</div>
<div className='height'>
    <img src={brain} className='img-6'/>
    <h1 className='four'>420</h1>
    <small className='small-10'>CONSULTING SOLUTIONS</small>
</div>
<div className='height'>
    <img src={brain} className='img-6'/>
    <h1 className='four'>420</h1>

    <small className='small-10'>CONSULTING SOLUTIONS</small>
</div>
        </div>
     </div>
     <div className='growth-container'>
        <div className='assistgrowth-container'>
            <h4 className='five'>Business Growth</h4>
        </div>
        <div className='assistgrowth-container-2'>
            <h4 className='seventy'>Business Growth</h4>
        </div>
        <div className='assistgrowth-container-3'>
            <h4 className='three'>Business Growth</h4>
        </div>
     </div>
    </>
   
  )
}

export default BusinessGrowth