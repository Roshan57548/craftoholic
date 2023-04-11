import React from 'react'
import './Style/About.css';
import Border from './Componant/Border';
import UtilityOriented from './Componant/UtilityOriented';
import ModernArt from './Componant/ModernArt';
import Cards from './Componant/Cards';
import ArtCraft from './Componant/ArtCraft';
import Review from './Componant/Review';
import SmallGallary from './Componant/SmallGallary';
import Borders from './Content/Border';
import UtilityOrienteds from './Content/UtilityOriented';
const About = () => {
  return (
    <div>
      <Border data={Borders}/>
      <UtilityOriented data={UtilityOrienteds}/>
      <ModernArt />
      <Cards />
      <ArtCraft />
      <Review />
      <SmallGallary />
    </div>
  )
}

export default About