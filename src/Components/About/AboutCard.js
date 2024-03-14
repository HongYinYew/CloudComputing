import React, { useState } from "react"
import "./About.css"
import { Link } from "react-router-dom"

const AboutCard = () => {

  const [click, setClick] = useState(false)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>With AD Hotel we don't just fulfill accomodation request, we can also host events and corporate meetings in a large scale. With the help of our large multi-purpose hall, it can do almost everything that is requested.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <Link to='/about' onClick={closeMobileMenu}>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
          </Link>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
        </div>
      </div>
    </>
  )
}

export default AboutCard
