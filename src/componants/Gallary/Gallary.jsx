import React from "react";
import "./Style/Gallary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Border from "./Componant/Border";
import ContentBorder from "./Content/ContentBorder";
import OurWorks from "./Componant/OurWorks";
import ContentOurWorks from "./Content/ContentOurWorks";
import Youtube from "./Componant/youtube";
import ContentYoutube from "./Content/ContentYoutube";
const Gallary = () => {
  return (
    <div>
      <Border data={ContentBorder} />
      <OurWorks data={ContentOurWorks}/>
      <Youtube data={ContentYoutube}/>
    </div>
  );
};

export default Gallary;
