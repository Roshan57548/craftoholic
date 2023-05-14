import React from "react";
import "./Style/UtilityOriented.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const UtilityOriented = (props) => {
  const navigate = useNavigate();
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
          <div className="col-lg-4 col-md-6 col-10 row">
            <div className="col-12 UtilityOriented-5">
            {props.data.Content_2}
            </div>
            <div className="col-12 UtilityOriented-3">
              <a onClick={() => navigate("/Contact-Us")} ><Button variant="contained">Contact Us</Button></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-10 col-10 UtilityOriented-5">
          {props.data.Content_3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityOriented;
