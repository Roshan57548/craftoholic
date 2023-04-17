import React from "react";
import "./Style/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const Carousels = (props) => {
  let CardItem;
  if(props.data.cards){
    CardItem = props.data.cards.map((mydata,index)=>{
      return (
        <Carousel.Item className="Carousels">
          <img
            className="d-block w-100 Carousels"
            src={mydata.Image_Link}
            alt="First slide"
          />
          <Carousel.Caption className="Carousels-1">
            <h3>{mydata.Heading}</h3>
            <p>{mydata.Content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }
  return (
    <div>
      <Carousel>
        {CardItem}
        
      </Carousel>
    </div>
  );
};

export default Carousels;
