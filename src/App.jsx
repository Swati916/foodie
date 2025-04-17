import React from 'react'
import {HashRouter as Router, Routes, Route, HashRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import Menu from './components/Menu';
import './App.css'
const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='menu-section' element={<Menu/>}/>
        </Routes>
        <Toaster/>
      </HashRouter>
    </>
  )
}

export default App
