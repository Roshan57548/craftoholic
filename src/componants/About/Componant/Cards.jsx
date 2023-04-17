import React from "react";
import "./Style/Cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Cards = (props) => {
  let Card_Image;
  if (props.data.Card_1) {
    Card_Image = props.data.Card_1.map((mydata, index) => {
      return (
        <div className="col-lg-3 col-md-6 col-12 Cards-1 row">
          <img
            src={mydata.Image}
            alt="my card image"
            className="col-12 Cards-2"
          />
        </div>
      );
    });
  }

  let Card_Data;
  if (props.data.Card_2) {
    Card_Data = props.data.Card_2.map((mycarddata, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-12 row Cards-3">
          <h2>{mycarddata.Heading}</h2>
          <p>{mycarddata.Content}</p>
        </div>
      );
    });
  }

  return (
    <div className="Cards-0">
      <div className="container Cards-1">
        <div className="row Cards-1">
          <div className="col-12 row Cards-1">{Card_Image}</div>
          <div className="col-12 row Cards-4">{Card_Data}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
