import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <DestinationHome />
      <Works />
      <Gallery />
    </>
  )
}

export default Home
