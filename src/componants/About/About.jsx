import React from 'react'
import './Style/About.css';
import Border from './Componant/Border';
import UtilityOriented from './Componant/UtilityOriented';
import ModernArt from './Componant/ModernArt';
import Cards from './Componant/Cards';
import ArtCraft from './Componant/ArtCraft';
import SmallGallary from './Componant/SmallGallary';
import Borders from './Content/Border';
import UtilityOrienteds from './Content/UtilityOriented';
import ContentModernArt from './Content/ContentModernArt';
import ContentCards from './Content/ContentCards';
import ContentArtCraft from './Content/ContentArtCraft';
import ContentSmallGallary from './Content/ContentSmallGallary';
const About = () => {
  return (
    <div>
      <Border data={Borders}/>
      <UtilityOriented data={UtilityOrienteds}/>
      <ModernArt data={ContentModernArt} />
      <Cards data={ContentCards}/>
      <ArtCraft data={ContentArtCraft}/>
      <SmallGallary data={ContentSmallGallary}/>
    </div>
  )
}

export default About