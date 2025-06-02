import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>

    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='wishlist' element={<Footer/>}/>

      </Routes>
      {/* <Header/> */}
      {/* <h2>Redux toolkit (Redux)</h2> */}
      {/* <Footer/> */}
    </div>
    </BrowserRouter>
  )
}

export default App