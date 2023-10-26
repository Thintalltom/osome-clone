import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header1 from './Components/Header1/Header1'
import Doing from './Components/DoingSection/Doing'
import Help from './Components/Help/Help'
import Choose from './Components/Choose/Choose'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  

  return (
    <>
  <Navbar />
  <Header1 />
  <Doing />
  <Help />
  <Choose />
  <Testimonial />
  <Footer />
    </>
  )
}

export default App
