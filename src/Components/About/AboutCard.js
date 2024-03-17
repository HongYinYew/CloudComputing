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
          <p>At AD Hotel, we specialize in providing tailored solutions to fuel the growth and success of your business. With a focus on innovation and excellence, we work closely with our clients to understand their unique challenges and opportunities, developing strategies that drive measurable results. From digital marketing and technology integration to strategic planning and operational optimization, our comprehensive range of services is designed to address every aspect of your business needs, empowering you to achieve your goals and realize your full potential.</p>
          <p>With a proven track record of success and a commitment to delivering exceptional results, we are dedicated to serving as your trusted partner on the journey to success. Whether you're a small startup looking to establish your brand presence or a large corporation aiming to streamline your operations, we have the expertise, resources, and passion to help you succeed. Join us and discover how we can collaborate to grow your business and achieve greatness together.</p>
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
