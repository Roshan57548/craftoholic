import React from "react";
import "./Style/ModernArt.css";
import Button from "@mui/material/Button";
import image from './Images/Artist.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const ModernArt = (props) => {
  const navigate = useNavigate();
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
                  <h2>{props.data.Heading}</h2>
                </div>
                <div className="col-12 ModernArt-1-3">
                {props.data.Content}
                </div>
                <div className="col-12 ModernArt-1-3-1 ModernArt-1-2">
                  <a onClick={() => navigate("/Gallary")}>
                    <Button variant="contained">My Work</Button>
                  </a>
                </div>
              </div>
              <div className="col-12 ModernArt-1-3-1 ModernArt-3">{props.data.Art}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernArt;
