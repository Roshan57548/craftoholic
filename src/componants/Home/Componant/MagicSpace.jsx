import React from 'react'
import './Style/MagicSpace.css';
import "bootstrap/dist/css/bootstrap.min.css";
const MagicSpace = (props) => {
  return (
    <div className="MagicSpace" >
      <div className="container MagicSpace-1" >
        <div className="row MagicSpace-1">
          <div className="col-lg-6 col-md-12 col-12 MagicSpace-1 MagicSpace-2">
            <img src={props.data.Images} className="MagicSpace-3"/>
          </div>
          <div className="col-lg-6 col-md-12 col-12 MagicSpace-4">
              <h2>
              {props.data.Heading}
              </h2>
              <p>
              {props.data.Subcontent}
              </p>
              <p>
              {props.data.Content}
              </p>
          </div>

        </div>


      </div>

    </div>
  )
}

export default MagicSpace;