import React from 'react'
import './BusinessCard.css'
import icon from '../assets/icon.png'
function BusinessCard() {
    return (
        <div className='business-container'>
            <div className='text-container-8'>
                <h1 className='case'>NEW CASE STUDIES</h1>
                <span className='clients'>We help our clients renew their business</span>
            </div>
            <div className='carcard-container'>
                <div className='car-card'>
                    <img src={icon} className='img-11' />
                    <span className='thought'>Thought leadership</span>
                    <h2 className='eight'>BUSINESS <br />GROWTH</h2>
                </div>
                <div className='car-card'>
                    <img src={icon} className='img-11' />
                    <span className='thought'>Thought leadership</span>
                    <h2 className='eight'>BUSINESS <br />GROWTH</h2>

                </div>
                <div className='car-card'>

                    <img src={icon} className='img-11' />

                    <span className='thought'>Thought leadership</span>
                    <h2 className='eight'>BUSINESS <br />GROWTH</h2>

                    <div className='assist-card'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BusinessCard