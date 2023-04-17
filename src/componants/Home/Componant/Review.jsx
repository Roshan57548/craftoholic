import React from "react";
import "./Style/Review.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Link } from "react-router-dom";
const Review = () => {
  return (
    <div className="sociallinks-1">
      <div className="social-contents">
        <h2>Thank you for your support!</h2>
        <h3 className="social-h3">We deliver good quality products</h3>
      </div>
      <div className="social-all-buttons">
        <div className="social-buttons">
          <a href="https://www.youtube.com/channel/UCXVGNsPzI4D-fB8Mrk5DuLw" target="_blank">
            <Button color="error" variant="contained" size="large">
              <YouTubeIcon className="social-icons" />
              Youtube
            </Button>
          </a>
        </div>

        <div className="social-buttons">
          <a href="https://www.instagram.com/anshaj_craftoholic" target="_blank">
            <Button
              variant="contained"
              color="secondary"
              className="social-instagram"
              size="large"
            >
              <InstagramIcon className="social-icons" />
              Instagram
            </Button>
          </a>
        </div>

        <div className="social-buttons">
          <a href="https://www.pinterest.com/anshaj_craftoholic" target="_blank">
            <Button color="error" variant="contained" size="large">
              <PinterestIcon className="social-icons" />
              Pinterest
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
