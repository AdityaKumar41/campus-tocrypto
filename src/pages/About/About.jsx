import React,{useState,useEffect} from "react";
import Notification from '../external/Notification';
import { popupPerson } from "../Home/Home";
import "./About.css";
import Img from "../../Assets/svg/Yuppies Managing.svg";
import telegram from "../../Assets/svg/Icon (1).svg";
import setting from "../../Assets/svg/Icon.svg";
import missionIcon from "../../Assets/svg/Yuppies Remote Team.svg";
import Tick from "../../Assets/svg/Tick.svg";
import grid from '../../Assets/svg/Group 1171275444.svg';
// import img from "../../Assets/images/sampleimg1.avif";
import { Link } from "react-router-dom";
import {timeredning} from '../Home/Home'
// import google from '../../Assets/images/image-50.png';
// import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
const imgKoinX = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/koinx.webp";
const polcadotImg = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Polkadot_Logo.webp"
// const imgCutm = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/cutm+logo.png";
const imgFusionWave = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/FusionWaveAI.png";
// const imgBlockCation = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/blockcation_logo.png";
const imgFilemarket = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/filemarket.png";
// const imgGramTarang = "https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/logo.png";
const imgs = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Sequence+01.00_00_10_14.Still001.jpg"
const team =[
  {
    img: imgs,
    name: "CUTM Bhubaneswar",

  }
];

const partner = [
  {
    img: polcadotImg,
    Comment: "stay tuned!..."
  },
  {
    img: imgKoinX,
    Comment: "stay tuned!..."
  },
  {
    img: imgFusionWave,
    Comment: "stay tuned!..."
  },
  {
    img: imgFilemarket,
    Comment: "stay tuned!..."
  }

]


const About = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    setShowNotification(true);
  }, []);
  return (
    <div>
      <div className="about-circle-top"></div>
      <div className="About-contant">
        <div className="About-section1">
          <div className="A-section-left">
            <img src={Img} alt="img" />
          </div>
          <div className="A-section-right">
            {/* <div className="about-back-circle1"></div> */}
            <h4>At C2C, we are passionate about blockchain technology.</h4>
            <span>
              Our community is a gathering place for blockchain enthusiasts,
              developers, investors, and innovators who share a common goal: to
              explore, learn, and collaborate in this exciting field.
            </span>
            <hr />
            <div className="A-section-right2">
              <div className="sub-content1">
                <img src={telegram} alt="icon" />
                <div className="sub-content1-right">
                  <h6 className="content-1-h6">How Community started?</h6>
                  <span>
                  It’s all started with group of students. And strong supporter of Bitcoin Blockchain.
                  </span>
                </div>
              </div>
              <div className="sub-content1">
                <img src={setting} alt="icon" />
                <div className="sub-content-right">
                  <h6 className="content-1-h6">Endless Possibilities</h6>
                  <span>
                  Joining a community doesn’t need your dollars.
                  </span>
                </div>
              </div>
              <button>
                <Link to="/Community"> Join our Team </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="About-section2">
          <div className="about-section2-left">
            <h3>Our Mission</h3>
            <span>Our mission is to foster a vibrant and inclusive ecosystem where individuals from all backgrounds can come together to exchange ideas, share knowledge</span>
            <ul>
              <li><img src={Tick} alt="tick icon" />Project Collaboration: contribute to open-source.</li>
              <li><img src={Tick} alt="tick icon" />Networking Opportunities: Connect with like-minded individuals</li>
              <li><img src={Tick} alt="tick icon" />Supportive Community: Join a supportive and welcoming community </li>
            </ul>
          </div>
          <div className="about-section2-right">
            <img src={missionIcon} alt="icon" />
          </div>
        </div>
        <div className="About-section3">
          <div className="about-section3-left">
          <h2>Our <span>Team</span></h2>
          <label>Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for </label>
          </div>
          <div className="about-section3-right">
          <button><Link to='/Community'>Join Our Team</Link></button>

          </div>
        </div>
      </div>
      {/* {notification} */}
      <div>
        {showNotification && (
          <div className="notification-wrapper">
            <div className="external-notification">
              <Notification 
                message={
                  <>
                    {timeredning ? (
                      <span>session is live now <a href={popupPerson.joinNow} target="_blank" rel="moreferrer">Join Here</a>!</span>
                    ) : (
                      <span>Registration is open <a href={popupPerson.registrationLink} target="_blank" rel="noreferrer">Click Now</a>!</span>
                    )}
                    <span className="popup-close-btn" onClick={() => setShowNotification(false)}>&times;</span>
                  </>
                } 
              />
            </div>
            
          </div>
        )}
      </div>
     <div className="our-team-img">
     <div className="grid">
     <div className="inside-grid">
      <img src={grid} alt="back" />
      {windowWidth < 720 && (
        <img src={grid} alt="second-image" />
      )}
    </div>
        </div>
        
          <div className="img-content">
 
            {team.map((person, index) => (
            <div className="content1" key={index}>
              <img src={person.img} alt="img" />
              <h3>{person.name}</h3>
            </div>
          ))}
            </div>
          
        </div>
        <div className="our-partner">
        <h1>Our Partner</h1>
        <div className="partner">
        {partner.map((Partners, index) => (
            <div className="company" key={index}>
              <img src={Partners.img} alt="img" />
              <span>{Partners.Comment}</span>
              </div>
            
          ))}
        </div>
        </div>

     </div>
    
  );
};

export default About;
