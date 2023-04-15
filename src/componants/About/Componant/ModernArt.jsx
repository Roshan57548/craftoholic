import React from "react";
import "./Style/ModernArt.css";
import Button from "@mui/material/Button";
import image from './Images/Artist.jpg';
const ModernArt = () => {
  return (
    <div className="ModernArt">
      <div className="ModernArt-1">
        <div className="container ModernArt-11">
          <div className="row ModernArt-1-1">
            <div className="col-lg-6 col-md-4 row ModernArt-0">
              <div className="col-lg-8">
              </div>
              <div className="col-lg-4 ModernArt-Image-1">
                <img src={image} className="ModernArt-Image"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-12 ModernArt-1-3-1 row">
              <div className="col-12 ModernArt-1-3-1 row">
                <div className="col-12 ModernArt-1-3">
                  <h2>Modern Craft Artist</h2>
                </div>
                <div className="col-12 ModernArt-1-3">
                  One of the most intriguing things about paper craft is the
                  versatility of the medium. With just a few sheets of paper and
                  some basic tools, a paper craft artist can create anything
                  from intricate paper flowers to elaborate three-dimensional
                  sculptures. The possibilities are truly endless. Paper craft
                  artists often start with a simple idea or sketch and then work
                  meticulously to bring that idea to life. They spend hours
                  cutting, folding, and manipulating paper until they achieve
                  the desired result. Paper craft requires a great deal of
                  patience, precision, and attention to detail, but the end
                  result is always worth the effort.
                </div>
                <div className="col-12 ModernArt-1-3-1 ModernArt-1-2">
                  <a href="/Gallary">
                    <Button variant="contained">My Work</Button>
                  </a>
                </div>
              </div>
              <div className="col-12 ModernArt-1-3-1 ModernArt-3">MODERN ART</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernArt;
