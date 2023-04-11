
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h2>Craftoholic</h2>
          <p>
              Arts and crafts evolved from the fixed notions of fundamental
              ideas to the modern usage of available materials and truthful
              representation of the existing lifestyles around the place.
            
          </p>
        </div>
        <div className="footer-column footer-elsewhere">
          <h2>Elsewhere</h2>
          <ul>
            <div className="footer-icon">
              <FacebookOutlinedIcon />
              <li>
                <a href="#">Facebook</a>
              </li>
            </div>
            <div className="footer-icon">
              <InstagramIcon />
              <li>
                <a href="#">Instagram</a>
              </li>
            </div>
            <div className="footer-icon">
              <PinterestIcon />
              <li>
                <a href="#">Pinterest</a>
              </li>
            </div>
            <div className="footer-icon">
              <TwitterIcon />
              <li>
                <a href="#">Twitter</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Our Address</h2>
          <p>
            625 @ David Blake Road,
            <br />
            Adventureland, LA 14536, USA
          </p>
          <div className="footer-icon">
            <div>

              <PhoneIcon />
            </div>
            <div className="footer-address">( 305 ) 533 - 1122</div>
          </div>
          <div className="footer-icon">
            <div>
              
              <EmailIcon />
            </div>
            <div className="footer-address"> admin@example.com</div>
          </div>
        </div>
        <div className="footer-column">
          <h2>Support</h2>
          <p>Call us: 1-800-123-4567</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
