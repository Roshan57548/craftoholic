import React from 'react'
import "./Style/Youtube.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Youtube = (props) => {
  let card;
  if(props.data.cards){
    card = props.data.cards.map((myvideodata, index)=>{
      return (
        <iframe src={myvideodata.Youtube_link} className='col-lg-4 col-md-6 col-12 Youtube-video'/>
      )
    })
  }
  return (
    <div className="Youtube">
      <div className="container">
        <h2 className="Youtube-heading-text">{props.data.Heading}</h2>
        <div className="row Youtube-1">
          <p className="col-10">{props.data.Thought}</p>
        </div>
        <div className='row'>
          {card}
        </div>
      </div>
    </div>
  )
}

export default Youtube