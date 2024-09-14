import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  console.log("hey")
  return (
    <>
      <Navbar/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home