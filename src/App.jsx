import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import ContactUs from './componants/Contact-Us/ContactUs';
import Gallary from './componants/Gallary/Gallary';
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/gallary' element={<Gallary />}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
