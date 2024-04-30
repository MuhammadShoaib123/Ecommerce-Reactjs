import React from 'react'
import shopy from './assets/images/shopy.png'
import "./app.css"
import btn2 from './assets/images/btn2.svg'
import Frame1 from './assets/images/Frame1.svg'
import search from './assets/images/search.svg'
import Frame3 from './assets/images/Frame3.svg'
import Frame2 from './assets/images/Frame2.svg'
import Line1 from './assets/images/Line1.svg'
import group4 from './assets/images/Group4.svg'
import Vector from './assets/images/Vector.svg'
import group13 from './assets/images/Group13.svg'
import card3 from './assets/images/card3.svg'
import girl from './assets/images/girl.svg'
import Shape from './assets/images/Shape.svg'
import circle from './assets/images/circle.svg'
import Shape1 from './assets/images/Shape1.svg'
import Shape2 from './assets/images/Shape2.svg'
import Shape3 from './assets/images/Shape3.svg'
const App = () => {
  return (
    <div className='container' >
      <div className='heading2'>
      
      <div className='header'>
        <img className='logo' src={shopy} alt='shopy' />
        <img src={Frame1} alt='frame1' id='Options' />
        <img src={search} alt='search' id='search' />
      </div>

      <div className='heading'>
      
        <h3 id='discover'>Discover New
          Collection <img src={Frame3} alt='frame3' id='frame3' /></h3>
          
        <div className='line1'>
          <img src={Line1} alt='line1' id='line1' />

          <p id='fashion'>Fashion is part of the daily air
            and it changes all the time,
            with all the events.</p>

        </div>


        <div className='btn2'>

          <h4 className='numTxt'>#01</h4>

          <img src={btn2} alt='btn2' id='btn2' />

          <img src={Vector} alt='Vector' id='btn2' />

        </div>

        <div className='groups'>
          <img src={group4} alt='group4' id='group4' />
          <img src={group13} alt='group13' id='group13' />

        </div>
      </div>

      <img src={girl} alt='girl' id='girl' />  
      <img src={Shape} alt='Shape' id='Shape' />     
      <img src={circle} alt='circle' id='circle' />  
      <img src={Shape1} alt='Shape1' id='Shape1' /> 
      <img src={Shape2} alt='Shape2' id='Shape2' /> 
      <img src={Shape3} alt='Shape3' id='Shape3' /> 

      </div>
      <div className='overlay-container'>
        <img src={card3} alt='card3' id='card3' />
        <img src={Frame2} alt='frame2' id='frame2' />
        <div className='footer'>

          <p className='footertxt'>Our Feature
            Products</p>
          <p className='footertxt2'>
            If we define Buzz buy in three words, it will be elegant, classic, and high-quality.
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default App
