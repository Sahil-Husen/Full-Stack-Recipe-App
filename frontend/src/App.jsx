import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className=' bg-gray-700 w-full h-full flex flex-col'>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    </div>
  )
}

export default App