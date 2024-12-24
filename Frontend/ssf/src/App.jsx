import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Query from './components/query'
import About from './components/about'
import Service from './components/service'
import Pricing from './components/pricing'
import Projects from './components/projects'
import Feedback from './components/feedback'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Pricing/>
      <Projects/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
