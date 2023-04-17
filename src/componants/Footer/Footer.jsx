import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Footer.css";
import first from "../../Image/logo.png";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
  return (
    <div className="complete">
      <footer className="container text-center text-lg-start text-dark stylefirst">
        <section className="d-flex justify-content-between text-white stylesecond"></section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                  <img className="icon" src={first} alt="First slide" />
                </h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p className="main-desc">
                  We Offer assistane in All the Educational Institutions in
                  Different Streams like Engineering, Medical, Management, AYUSH
                  Courses and MBBS from Abroad, Have a Look on Our Colleges.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 policy">
                <h6 className="text-uppercase fw-bold">Used For</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>Birthday Gift</p>
                <p>Anniversary Gift</p>
                <p>Friendship Bond</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mix">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/About-Us" className="footer-link">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/Gallary" className="footer-link">
                    Gallary
                  </Link>
                </p>
                <p>
                  <Link to="/Contact-Us" className="footer-link">
                    Contact Us
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 address">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                  <i className="fas fa-home mr-3"></i> House no. 64 Bardhaiya
                  bazar, 272175, Uttar Pradesh
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  craftoholicanshaj @gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +917905816973
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.instagram.com/anshaj_craftoholic/?igshid=YmMyMTA2M2Y%3D"
                      target="_blank"
                    >
                      <InstagramIcon id="Form-icons" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.youtube.com/channel/UCXVGNsPzI4D-fB8Mrk5DuLw"
                      target="_blank"
                    >
                      <YouTubeIcon id="Form-icons" />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.pinterest.com/anshaj_craftoholic/?invite_code=6f7846bf52cf43b3a74aa5dd0472d431&sender=634374434920225668"
                      target="_blank"
                    >
                      <PinterestIcon id="Form-icons" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="text-center p-3 stylefour">
        © 2023 Anshaj Craftoholic : Made by AGBIZ
      </div>
    </div>
  );
};

export default Footer;
