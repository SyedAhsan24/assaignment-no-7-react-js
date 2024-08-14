import React from 'react'
import Home from '../Home'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Singleproduct from './Components/Singleproduct'



const App = () => {
  return (
    <div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='Singleproduct/:id' element={<Singleproduct/>} />
</Routes>
      
      
    </div>
  )
}

export default App
