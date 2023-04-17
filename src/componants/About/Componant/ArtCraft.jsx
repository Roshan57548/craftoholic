import React from "react";
import "./Style/ArtCraft.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
const ArtCraft = (props) => {
  const navigate = useNavigate();
  const moveto = (event) => {
    navigate("/Gallary");
  };
  return (
    <div className="ArtCraft ArtCraft-0">
      <div className="container ArtCraft-0">
        <div className="row ArtCraft-0">
          <div className="col-lg-6 col-md-12 ArtCraft-0-1">
            <h2 className="ArtCraft-1">{props.data.Heading}</h2>
            <h4 className="ArtCraft-1">{props.data.SubHeading}</h4>
            <p className="ArtCraft-1">{props.data.Content}</p>
            <Button variant="light" onClick={moveto}>
              Learn More
            </Button>
          </div>
          <div className="col-lg-6 col-md-12 ArtCraft-0 row">
            <div className="col-md-10 col-12 ArtCraft-0 ArtCraft-0-12 row">
              <h3 className="col-12">Creative Work</h3>
              <div className="col-12">
                <ProgressBar animated now={85} />
              </div>
            </div>
            <div className="col-md-10 col-12 ArtCraft-0 ArtCraft-0-12 row">
              <h3 className="col-12">Collabrative Work</h3>
              <div className="col-12">
                <ProgressBar animated now={82}  variant="success" />
              </div>
            </div>
            <div className="col-md-10 col-12 ArtCraft-0 ArtCraft-0-12 row">
              <h3 className="col-12">Work On Time</h3>
              <div className="col-12">
                <ProgressBar animated now={90} variant="warning"/>
              </div>
            </div>
            <div className="col-md-10 col-12 ArtCraft-0 ArtCraft-0-12 row">
              <h3 className="col-12">Feedback Points</h3>
              <div className="col-12">
                <ProgressBar animated now={95} variant="danger"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraft;
