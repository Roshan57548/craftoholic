import React from "react";
import "./Style/Border.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const Border = (props) => {
  const navigate = useNavigate();

  const Moveto = () => {
    navigate(props.data.Links[0].Link);
  };

  return (
    <div className="Border-0">
      <div className="container">
        <div className="row">
          <div className="col-12 Border-1">{props.data.Heading}</div>
          <div className="col-12 Border-2">
            <Button
              className="Border-3"
              onClick={Moveto}
              sx={{ color: "black" }}
            >
              {props.data.Links[0].Heading}
            </Button>
            <span className="slash">/</span>
            <Button className="Border-4" sx={{ color: "black" }}>
              {props.data.Links[1].Heading}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Border;
