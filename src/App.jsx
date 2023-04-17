import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import ContactUs from './componants/Contact-Us/ContactUs';
import Gallary from './componants/Gallary/Gallary';
import Apply from './componants/Apply-Now/Apply';
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About-Us' element={<About/>}/>
        <Route path='/Contact-Us' element={<ContactUs/>}/>
        <Route path='/Gallary' element={<Gallary />}/>
      </Routes>
      <Apply />
      <Footer />
      
    </div>
  )
}

export default App
