import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>At AD Hotel, we offer a range of innovative features designed to empower businesses of all sizes to thrive in today's competitive landscape. Our customizable solutions cater to the diverse needs of our clients, providing them with the flexibility and agility to adapt and grow. From advanced analytics and automation tools to cloud-based platforms and mobile applications, our cutting-edge technology solutions are tailored to streamline processes, enhance efficiency, and drive measurable results.</p>
            <p>With exceptional support and scalability, our features are designed to grow with your business, ensuring that you have the resources and assistance you need at every stage of your journey. Whether you're a small startup looking to establish your brand presence or a large enterprise aiming to optimize your operations, AD Hotel is here to help you achieve your goals and unlock the full potential of your business. Experience the difference with our innovative features and discover how we can empower your business success.</p>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
