import React, { useState, useEffect } from "react";
// import Notification from '../external/Notification';
// import { popupPerson } from "../Home/Home";
import Popup from "reactjs-popup";
import "./Community.css";
import L from "../../Assets/svg/Vector (4).svg";
import PlusIcon from "../../Assets/svg/Group (1).svg";
import Planet from "../../Assets/images/rectangle-1340.png";
import Triangle from "../../Assets/svg/Group 1 (1).svg";
// import {timeredning} from '../Home/Home';
// import InstaIcon from '../../Assets/svg/ig-instagram-icon.svg'
// import YoutubeIcon from '../../Assets/svg/youtube-color-icon.svg'
// import TwitterIcon from '../../Assets/svg/x-social-media-logo-icon.svg'
// import DiscordIcon from '../../Assets/svg/discord-round-color-icon.svg'
// import { Link } from 'react-router-dom';

const imgKoinX =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/koinx.svg";
const imgCutm =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/centurion.png";
const imgFusionWave =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/FusionWaveAI.png";
const imgBlockCation =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/blockcationlogo.png";
const imgFilemarket =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/filemarket.png";
const imgGramTarang =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/gramtarang.png";
const imgePolkdot =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/Polkadot_Logo.webp";
const imgweb3foundation =
  "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/web3foundation.webp";
// function scrollToSection() {
//   const section = document.getElementById('sectionId');
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// };

const Community = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  const [showPopup, setShowPopup] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    // Load smtp.js script dynamically
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script after component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // call
  // useEffect(() => {
  //   setShowNotification(true);
  // }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: "",
      },
    });
  };

  const handleSubmited = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = "Invalid email address";
    }

    if (formData.phoneNumber.trim().length !== 10) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    setFormData({
      ...formData,
      errors: errors,
    });

    if (Object.keys(errors).length === 0) {
      // Send email using SMTP.js
      window.Email.send({
        To: "campustocrypto@gmail.com",
        SecureToken: "17983650-9109-4d14-b06e-4c92fc80753b",
        From: "campustocrypto@gmail.com",
        Subject:
          "New message from " + formData.firstName + " " + formData.lastName,
        Body:
          "Phone Number: " +
          formData.phoneNumber +
          "\n\nEmail: " +
          formData.email +
          "\n\nMessage: " +
          formData.message,
      }).then(setShowPopup(true));
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        errors: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        },
      });
    }
  };

  return (
    <>
      <div className="community">
        <div className="community-section1">
          <div className="community-section1-left">
            <h1>Access the power of Blockchain</h1>
            <span>
              From lecture halls to blockchains. Get ahead in finance and tech
              with Campus to Crypto.
            </span>
          </div>
          <div className="community-section-right">
            <img src={PlusIcon} alt="icon" />
            <img src={L} alt="icon" />
            <img src={Triangle} alt="icon" />
          </div>
        </div>
      </div>
      {/* {notification} */}
      {/* <div>
        {showNotification && (
          <div className="notification-wrapper">
            <div className="external-notification">
              <Notification 
                message={
                  <>
                    {timeredning ? (
                      <span>session is live now <a href={popupPerson.joinNow} target="_blank" rel="noopener noreferrer">Join Now</a>!</span>
                    ) : (
                      <span>Registration is open <a href={popupPerson.registrationLink} target="_blank" rel="noopener noreferrer">Click Now</a>!</span>
                    )}
                    <span className="popup-close-btn" onClick={() => setShowNotification(false)}>&times;</span>
                  </>
                } 
              />
            </div>
            
          </div>
        )}
      </div> */}
      <div className="community-circle"></div>
      <div className="community-section2">
        <div className="community-section2-up">PARTNER/SUPPORT</div>
        <div className="community-section2-down">
          <img src={imgCutm} alt="img" />
          <img src={imgGramTarang} alt="img" />
          <img src={imgePolkdot} alt="imgpol" />
          <img src={imgweb3foundation} alt="web3img" />
          <img src={imgFilemarket} alt="img" />
          <img src={imgKoinX} alt="img" />
          <img src={imgFusionWave} alt="img" />
          <img src={imgBlockCation} alt="img" />
        </div>
      </div>
      <div className="community-section3">
        <img src={Planet} alt="img" />
        <div className="community-section3-head">
          <h4 id="sectionId">Join Our Community Now</h4>
          <span>
            Join our vibrant blockchain community today! Engage, learn, and
            collaborate with like-minded enthusiasts. Don't miss out, join now!
          </span>
          <form className="community-input-field" onSubmit={handleSubmited}>
            <div className="firstname">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              {formData.errors.firstName && (
                <span>{formData.errors.firstName}</span>
              )}
            </div>
            <div className="lastname">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {formData.errors.lastName && (
                <span>{formData.errors.lastName}</span>
              )}
            </div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {formData.errors.phoneNumber && (
              <span>{formData.errors.phoneNumber}</span>
            )}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
            />
            {formData.errors.email && <span>{formData.errors.email}</span>}
            <button type="submit">Join us</button>
          </form>
          <Popup
            open={showPopup}
            onClose={() => setShowPopup(false)}
            contentStyle={{
              maxWidth: "400px",
              borderRadius: "20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="popup-content">
              <span
                className="popup-close-btn"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </span>
              <h3 className="popup-title">
                🥳🎉Thank you for Joining our Community 🎉!
              </h3>
              <p className="popup-message">
                We'll get back to you as soon as possible.
              </p>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Community;
