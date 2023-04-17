import React from 'react'
import './Style/SmallGallary.css';
import "bootstrap/dist/css/bootstrap.min.css";
const SmallGallary = (props) => {
  return (
    <div className='SmallGallary'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 row'>
            <div className='col-lg-8 col-md-12 SmallGallary-1-1'>
              <img className='SmallGallary-1' src={props.data.Cards[0].Image}/>
              <iframe src={props.data.Cards[0].Videos_Link} className='SmallGallary-2-1'/>
            </div>
          </div>
          <div className='col-12 SmallGallary-01 row'>
            <div className='col-lg-8 col-md-12 SmallGallary-1-1'>
              <img className='SmallGallary-1' src={props.data.Cards[1].Image}/>
              <iframe src={props.data.Cards[1].Videos_Link} className='SmallGallary-2-1'/>
            </div>
          </div>
          

        </div>

      </div>

    </div>
  )
}

export default SmallGallary