import React from "react";
import { GrYoutube } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BiLogoDiscord } from "react-icons/bi";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const logoI =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/campustocryptologo.png";
// const nevigateN = window.location.href = "/#subscribe";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-section-content">
            <div className="footer-section-left">
              <NavLink to="/">
                <img src={logoI} alt="LoGo" className="navlin-img" />
              </NavLink>
              <div className="Manged-by">Supported By Centurion University</div>
              <div className="social-media-logo">
                <NavLink
                  to="https://www.youtube.com/@CampustoCrypto"
                  target="_blank"
                >
                  <GrYoutube />
                </NavLink>
                <NavLink
                  to="https://www.twitter.com/campustocrypto"
                  target="_blank"
                >
                  <BsTwitterX />
                </NavLink>
                <NavLink
                  to="https://www.instagram.com/campustocrypto"
                  target="_blank"
                >
                  <FaInstagram />
                </NavLink>
                <NavLink
                  to="https://discord.com/invite/TGWAnKChDq"
                  target="_blank"
                >
                  <BiLogoDiscord />
                </NavLink>
              </div>
              <div className="footer-cp">© Copyright 2024 Campus to Crypto</div>
            </div>
            <div className="main-right-side">
              {/* <div className="footer-section-right">
          OTHER RESOURCES
          <ul>
            <li><NavLink to='#'></NavLink></li>
            <li><NavLink to='#'></NavLink></li>
          </ul>
        </div> */}
              <div className="footer-section-right">
                <div className="get-connect">GET CONNCTED</div>
                <ul>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Newsletter</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Our Team</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
