import React from "react";
import "./Style/UtilityOriented.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const UtilityOriented = (props) => {
  return (
    <div className="UtilityOriented-0">
      <div className="container">
        <div className="row UtilityOriented-1">
          <h2 className="col-12">{props.data.Heading}</h2>
        </div>
        <div className="row UtilityOriented-4">
          <div className="col-lg-4 col-md-6 col-12 UtilityOriented-2 UtilityOriented-5">
          {props.data.Content_1}
          </div>
          <div className="col-lg-4 col-md-6 col-12 row UtilityOriented-5">
            <div className="col-12">
            {props.data.Content_2}
            </div>
            <div className="col-12 UtilityOriented-3 ">
              <Button variant="contained" >Learn More</Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 UtilityOriented-5">
          {props.data.Content_3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityOriented;
