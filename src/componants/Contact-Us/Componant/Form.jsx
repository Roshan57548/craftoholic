import React from 'react'
import './Style/Form.css';
import "bootstrap/dist/css/bootstrap.min.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Form = (props) => {
  return (
    <div className='Form'>
      <div className='container'>
        <div className='row Form-11'>
          <div className='col-lg-8 col-md-6 col-12 Form-1 row'>
            <iframe className='col-12' src="https://www.google.com/maps/embed/v1/place?q=STARWELL+FOUNDATION,+Shahpur,+Gorakhpur,+Uttar+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
          <div className='col-lg-4 col-md-6 col-12 Form-2 row'>
            <div className='col-12 Form-3 row'>
              <h2>
                {props.data.cards[0].Heading}
              </h2>
              <p>{props.data.cards[0].Content}</p>
            </div>
            <div className='col-12 Form-3 row'>
              <h2>
              {props.data.cards[1].Heading}
              </h2>
              <p>{props.data.cards[1].Content}</p>
            </div>
            <div className='col-12 Form-3 row'>
              <h2>
              {props.data.cards[2].Heading}
              </h2>
              <p>{props.data.cards[2].Content}</p>
            </div>
            <div className='col-12 Form-3 row'>
              <h2>
              {props.data.cards[3].Heading} 
              </h2>
              <p>
                <span><a href='https://www.instagram.com/anshaj_craftoholic/?igshid=YmMyMTA2M2Y%3D' target='_blank'><InstagramIcon id='Form-icon'/></a></span>
                <span><a href='https://www.youtube.com/channel/UCXVGNsPzI4D-fB8Mrk5DuLw' target='_blank'><YouTubeIcon id='Form-icon'/></a></span>
                <span><a href='https://www.pinterest.com/anshaj_craftoholic/?invite_code=6f7846bf52cf43b3a74aa5dd0472d431&sender=634374434920225668' target='_blank'><PinterestIcon id='Form-icon'/></a></span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Form