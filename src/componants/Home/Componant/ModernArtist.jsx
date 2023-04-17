import React from "react";
import "./Style/ModernArtist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
const ModernArtist = (props) => {
  const TreatmentData = props.data.cards.map((row, index) => {
    return (
      <div className="col-lg-3 col-md-6 col-12 mt-3 mb-3">
        <Card className="content-center">
          <Card.Img variant="top" src={row.img} className="sizeimage" />
          <Card.Body className="content-center-2">
            <Card.Title className="content-heading">{row.heading}</Card.Title>
            <Card.Text>{row.tretment}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        <div className="row margin">
          <h2 className="col-12 mb-3">ANSHAJ CRAFTOHOLIC WAY SINCE 2019</h2>
          {TreatmentData}
        </div>
      </div>
    </div>
  );
};

export default ModernArtist;
