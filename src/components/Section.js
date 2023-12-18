import React from 'react'
import './Section.css'
function Section() {
  return (
    <main className='main-container'>
      <div className='Section-container'>
        <div className='text-container'>
          <div className='text'>
            <span className='text-child' > WELCOME TO CODESHAPER</span>
          </div>
          <h1 className='text-2'>CONSULTING<br />FOR EVERY <br />BUSINESS</h1>

          <div style={{ transitionDelay: '500ms', marginTop: '50px' }}>

            <button className='btn' type='submitt'>Dicover More</button>
          </div>
        </div>

      </div>
    </main>

  )
}

export default Section