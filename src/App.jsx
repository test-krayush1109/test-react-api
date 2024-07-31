import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import About from './components/About'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/gallery' element={<Gallery />} ></Route>
        <Route path='/about' element={<About />} ></Route>
      
      </Routes>    
    </>
  )
}

export default App