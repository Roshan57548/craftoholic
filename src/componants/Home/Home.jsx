import React from 'react'
import './Style/Home.css';
import Carousels from './Componant/Carousels';
import WorkOfArt from './Componant/WorkOfArt';
import ModernArtist from './Componant/ModernArtist';
import MagicSpace from './Componant/MagicSpace';
import Review from './Componant/Review';
import ContentCarousel from './Content/ContentCarousel';
import ContentWorkOfArt from './Content/ContentWorkOfArt';
import ContentModernArtist from './Content/ContentModernArtist';
import ContentMagicSpace from './Content/ContentMagicSpace';
const Home = () => {
  return (
    <div className='Home'>
      <Carousels data={ContentCarousel}/>
       <WorkOfArt data={ContentWorkOfArt}/>
      <ModernArtist data={ContentModernArtist}/>
      <MagicSpace data={ContentMagicSpace}/>
      <Review />
    </div>
  )
}

export default Home