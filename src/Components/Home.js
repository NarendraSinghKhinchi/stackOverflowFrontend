import React from 'react'
import Navbar from './Navbar'
import TrendingQuestions from './TrendingQuestions'
import Footer from './Footer.js'
import './styles.css'
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <TrendingQuestions></TrendingQuestions>
      <Footer></Footer>
    </>
  )
}

export default Home