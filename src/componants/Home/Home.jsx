import React from 'react'
import './Style/Home.css';
import Carousel from './Componant/Carousel';
import WorkOfArt from './Componant/WorkOfArt';
import ModernArtist from './Componant/ModernArtist';
import MagicSpace from './Componant/MagicSpace';
import Review from './Componant/Review';
import Studio from './Componant/Studio';
const Home = () => {
  return (
    <div className='Home'>
      <Carousel />
      <WorkOfArt />
      <ModernArtist />
      <MagicSpace />
      <Review />
      <Studio />

    </div>
  )
}

export default Home