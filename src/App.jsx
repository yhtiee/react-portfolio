import React from 'react'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Experience from './Components/Experience/experience'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Testimonals from './Components/Testimonals/testimonals'
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/> 
      <Services/>
      <Portfolio/>
      <Testimonals/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App