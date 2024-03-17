import React, { useState, useEffect } from "react";
import Data from "./Data";

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [error, setError] = useState(""); // State to track form validation error
  const [formData, setFormData] = useState({
    singlepage: "",
    checkIn: "",
    checkOut: "",
    pax: "",
    rooms: "",
    email: ""
  });

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any field is empty
    if (!formData.singlepage || !formData.checkIn || !formData.checkOut || !formData.pax || !formData.rooms || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }
    setFormSubmitted(true); // Set form submission state to true
    // You can perform additional form submission logic here
    setError(""); // Clear any previous error messages
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false); // Reset form submission state after 2 minutes
      }, 2 * 60 * 1000); // 2 minutes in milliseconds
      return () => clearTimeout(timer); // Clear the timer when component unmounts
    }
  }, [formSubmitted]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt='Home' />}
            </div>
          );
        })}
      </section>

      <section className='slide-form'>
        <div className='container'>
          <h2>Enjoy Your Holiday</h2>
          <span> Select And Book A Hotel Now</span>

          <form onSubmit={handleSubmit}>
            <label htmlFor="singlepage"></label>
            <select name="singlepage" id="singlepage" value={formData.singlepage} onChange={handleChange}>
              <option value="" disabled selected hidden>(Select Hotel)</option>
              <option value="1">Le Quadri Hotel</option>
              <option value="2">Grand Millennium</option>
              <option value="3">Shangri-la Hotel</option>
              <option value="4">Banyan Tree Hotel</option>
              <option value="5">Sleeping Lions Suites</option>
              <option value="6">Mandarin Oriental</option>
            </select>
            <div className='flex_space'>
              <input type='date' placeholder='Check In' name="checkIn" value={formData.checkIn} onChange={handleChange} />
              <input type='date' placeholder='Check Out' name="checkOut" value={formData.checkOut} onChange={handleChange} />
            </div>
            <div className='flex_space'>
              <input type='number' placeholder='Pax' name="pax" value={formData.pax} onChange={handleChange} />
              <input type='number' placeholder='Rooms' name="rooms" value={formData.rooms} onChange={handleChange} />
            </div>
            <input type='email' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
            <input type='Submit' value='Book Now' className='submit'/>
            {error && <div className="error-message">{error}</div>}
          </form>
          
          {formSubmitted && (
            <div className="confirmation-message">Your booking has been submitted successfully!<br />We will contact you shortly with a confirmation message!</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
