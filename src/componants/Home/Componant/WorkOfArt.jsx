import React from "react";
import "./Style/WorkOfArt.css";
import "bootstrap/dist/css/bootstrap.min.css";
const WorkOfArt = (props) => {
  let CardItem;
  if (props.data.cards) {
    CardItem = props.data.cards.map((carddata, index) => {
      return (
        <div>
          <a href="/Gallary"><img src={carddata.image} alt="My Image" /></a>
        </div>
      );
    });
  }
  return (
    <div className="WorkOfArt">
      <div className="container">
        <div className="row">
          <h2 className="col-12 WorkOfArt-0-1">Work Of Art</h2>
          <div className="WorkOfArt-0">{CardItem}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkOfArt;
