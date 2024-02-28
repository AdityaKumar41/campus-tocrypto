import React from "react";
import planet from "../../Assets/svg/81.svg";
import planet2 from "../../Assets/svg/82.svg";
import "./Product.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="product-section">
      <div className="product-circle1"></div>
      <div className="product-circle2"></div>
      <div className="product-circle3"></div>
      <img src={planet} alt="icon" />
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            COMMING SOON
          </text>
        </svg>
      </div>
      <div className="Product-Social-media-Section">
  <a href="https://www.facebook.com" style={{ color: 'inherit', textDecoration: 'none' }}>
    <FaFacebook />
  </a>
  <a href="https://www.instagram.com" style={{ color: 'inherit', textDecoration: 'none' }}>
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com" style={{ color: 'inherit', textDecoration: 'none' }}>
    <FaLinkedin />
  </a>
  <a href="https://twitter.com" style={{ color: 'inherit', textDecoration: 'none' }}>
    <FaXTwitter />
  </a>
  <a href="https://www.youtube.com" style={{ color: 'inherit', textDecoration: 'none' }}>
    <FaYoutube />
  </a>
</div>

      <div className="product-section-3">
        <div className="planet1"><img src={planet} alt="icon" /></div>
        <div className="product-discussionSection">
          <input type="text" placeholder="Write your thoughts" />
          <button>Subscribe</button>
        </div>
        <div className="planet2"><img src={planet2} alt="icon" /></div>
      </div>
    </div>
  );
};

export default Product;
