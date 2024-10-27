import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Service from './components/Service'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
