import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/Home/Banner'
import Header from '../components/Home/Header'
import About from './About'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  console.log("hey")
  return (
    <>
      <Navbar/>
      <Header/>
      <Banner/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home;