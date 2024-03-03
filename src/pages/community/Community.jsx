import React,{useState,useEffect} from 'react';
import './Community.css';
import PlusIcon from '../../Assets/svg/Group (1).svg';
import L from '../../Assets/svg/Vector (4).svg';
import Triangle from '../../Assets/svg/Group 1 (1).svg'
import Planet from '../../Assets/images/rectangle-1340.png'
// import YoutubeIcon from '../../Assets/svg/youtube-color-icon.svg'
// import InstaIcon from '../../Assets/svg/ig-instagram-icon.svg'
// import DiscordIcon from '../../Assets/svg/discord-round-color-icon.svg'
// import TwitterIcon from '../../Assets/svg/x-social-media-logo-icon.svg'
// import { Link } from 'react-router-dom';



const imgKoinX = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/koinx.webp";
const imgCutm = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/cutm+logo.png";
const imgFusionWave = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/FusionWaveAI.png";
const imgBlockCation = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/blockcation_logo.png";
const imgFilemarket = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/filemarket.png";
const imgGramTarang = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/logo.png";
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
    message:"",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message:"",
    },
  });

  useEffect(() => {
    // Load smtp.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script after component unmounts
      document.body.removeChild(script);
    };
  }, []);

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
        SecureToken: "17983650-9109-4d14-b06e-4c92fc80753b",
        To: 'campustocrypto@gmail.com',
        From: "campustocrypto@gmail.com",
        Subject: 'New message from ' + formData.firstName + ' ' + formData.lastName,
        Body: 'Phone Number: ' + formData.phoneNumber + '\n\nEmail: ' + formData.email+'\n\nMessage: ' + formData.message
      }).then(
        message => alert(message)
      );
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message:"",
        errors: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message:"",
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
                <span>From lecture halls to blockchains. Get ahead in finance and tech with Campus to Crypto.</span>
            </div>
            <div className="community-section-right">
                <img src={PlusIcon} alt="icon" />
                <img src={L} alt="icon" />
                <img src={Triangle} alt="icon" />
            </div>
        </div>
    </div>
    <div className="community-circle"></div>
    <div className="community-section2">
        <div className="community-section2-up">
            POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
          </div>
          <div className="community-section2-down">
            <img src={imgCutm} alt="img" />
            <img src={imgGramTarang} alt="img" />
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
            <span>Join our vibrant blockchain community today! Engage, learn, and collaborate with like-minded enthusiasts. Don't miss out, join now!</span>
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
                  <span >{formData.errors.firstName}</span>
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
            {formData.errors.email &&( <span>{formData.errors.email}</span>)}
              <button type='submit'>Join us</button>
            </form>
            
          </div>
         
        </div>
    </>
  )
}

export default Community;