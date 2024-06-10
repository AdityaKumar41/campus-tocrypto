import React, { useState, useEffect } from "react";
// import Notification from '../external/Notification';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";
// import Confetti from '../Confetti';

import "./Home.css";
// import YTicon from "../../Assets/svg/youtube-color-icon.svg";
// import Podcast from "../../Assets/svg/apple-podcasts-icon.svg";
import Bimage from "../../Assets/svg/Group 17.svg";
import Shape from "../../Assets/svg/Group 16.svg";
// import Square from "../../Assets/svg/Rectangle 131.svg";
import Person1 from "../../Assets/images/ellipse-10.png";
import Person2 from "../../Assets/images/ellipse-20.png";
import Person3 from "../../Assets/images/ellipse-30.png";
import Person4 from "../../Assets/images/ellipse-40.png";
// import Company1 from "../../Assets/images/image-40.png";
// import Company2 from "../../Assets/images/image-50.png";
import Backimg from "../../Assets/images/backgroundIMAGE.png";
// import image1 from "../../Assets/images/image9.png";
// import image2 from "../../Assets/images/image10.png";
// import image3 from "../../Assets/images/image11.png";
// import image4 from "../../Assets/images/image12.png";
// import image5 from "../../Assets/images/image13.png";
// import image6 from "../../Assets/images/image14.png";
// import image7 from "../../Assets/images/image15.png";
// import image8 from "../../Assets/images/image16.png";
const imgPolk =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/radhakrishnadashari.jpg";
const imgwaveAI =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/ankitdas.jpg";
const imgKoi =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/punitagarwal.jpg";
const imgFile =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/Ilya%20(Makhov)%20Orlov.jpg";
const imgBSB =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/sahilthakur.jpg";
const imgSFT =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/Prashantsurana.png";
//footer-side
const image1 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/iamge2018.jpg";
const image2 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/timeline1.jpg";
const image3 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/image2019.avif";
const image4 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/image2020.webp";
const image5 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/timeline2.jpg";
const image6 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/image2021.avif";
const image7 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/timeline4.jpg";
const image8 =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/timeline3.jpg";

const imgKoinX =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/koinx.svg";
const imgCutm =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/centurion.png";
const imgFusionWave =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/FusionWaveAI.png";
const imgBlockCation =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/blockcationlogo.png";
const imgFilemarket =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/filemarket.png";
const imgGramTarang =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/gramtarang.png";
const imgePolkdot =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/Polkadot_Logo.webp";
const imgweb3foundation =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/web3foundation.webp";
const YTicon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
const Podcast =
  "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg";
// const IntroVideo = "httpos";
const Ylink = "https://www.instagram.com/campustocrypto/";
const Tlink = "https://twitter.com/campustocrypto";
const data = [
  {
    image: imgPolk,
    name: "Radhakrishna Dasari",
    role: "Polkadot",
  },
  {
    image: imgwaveAI,
    name: "Ankit Das",
    role: "CEO of FusionwaveAI",
  },
  {
    image: imgKoi,
    name: "Punit Agarwal",
    role: "CEO of KoinX",
  },
  {
    image: imgFile,
    name: "Ilya Orlov",
    role: "CEO of Filemarket",
  },
  {
    image: imgBSB,
    name: "Sahil Thakur",
    role: "CEO of BlockseBlock",
  },
  {
    image: imgSFT,
    name: "Prashant Surana",
    role: "Co-founder & Dir of Snapper Future Tech",
  },
];
const CountComponent = ({ count }) => (
  <div className="count">
    {count.map((Count, index) => (
      <div className="innner-count" key={index}>
        {/* Use CountUp component */}
        <CountUp end={parseInt(Count.number)} duration={2.5} />
        <span>+</span>
        <h3 className="inner-count-h3">{Count.title}</h3>
      </div>
    ))}
  </div>
);
const count = [
  {
    number: "7+",
    title: "YEARS",
  },
  {
    number: "100+",
    title: "ACTIVE MEMBERS",
  },
  {
    number: "30+",
    title: "PROJECTS",
  },
];
// this is the notification
export const popupPerson = {
  image: imgPolk,
  name: "Radhakrishna Dasari",
  registrationLink: "https://forms.gle/ckZApPnao3Z3BLCk7",
  joinNow:
    "https://us02web.zoom.us/j/89452865191?pwd=SXNTSXVZYlhaTFg2b1pVY1RPWGU4dz09",
  Ytubevideo: "https://www.youtube.com/embed/aDVOfEAw4OQ?si=DuMFAljtNhDKhUxW",
};
// export let timeredning = false;
const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    errors: {
      email: "",
    },
  });
  const [showPopup, setShowPopup] = useState(false);
  // const [showPop, setShowPop] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);
  const [Showpopuprev, setShowpopuprev] = useState(false);
  // const [timerEnded, setTimerEnded] = useState(false);
  // const [countdown, setCountdown] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0
  // });

  // useEffect(() => {
  //   setShowPop(true);
  // }, []);
  useEffect(() => {
    setShowpopuprev(false);
  }, []);
  // useEffect(()=>{
  //   if (!showPop) {
  //     setShowNotification(true);
  //     setShowpopuprev(true)
  //   }else{
  //     setShowNotification(false);
  //     setShowpopuprev(false)
  //   }
  // },[showPop]);
  // useEffect(() => {
  //   const futureDate = new Date("2024-03-14T15:00:00"); // Set your future date here
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const difference = futureDate.getTime() - now.getTime();

  //     if (difference > 0) {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  //       const minutes = Math.floor((difference / (1000 * 60)) % 60);
  //       const seconds = Math.floor((difference / 1000) % 60);

  //       setCountdown({ days, hours, minutes,seconds  });
  //     } else {
  //       clearInterval(interval);
  //       // adding ending interval of the timer
  //       setTimerEnded(true);
  //       timeredning = true
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
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

  const subscribe = (e) => {
    e.preventDefault();
    const errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = "Invalid email address";
    }

    setFormData({
      ...formData,
      errors: errors,
    });

    if (Object.keys(errors).length === 0) {
      // Send email using SMTP.js
      window.Email.send({
        SecureToken: "17983650-9109-4d14-b06e-4c92fc80753b",
        To: "campustocrypto@gmail.com",
        From: "campustocrypto@gmail.com",
        Subject: "New subscriber",
        Body: "Email: " + formData.email,
      }).then(setShowPopup(true));

      // Clear form fields
      setFormData({
        email: "",
        errors: {
          email: "",
        },
      });
    }
  };
  const [typeEffect] = useTypewriter({
    words: ["Blockchain", "Decentralization", "Cryptocurrency"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
      <div className="circle"></div>
      <div className="home">
        <div className="framer">
          <div className="content">
            Access the power of Decentralization on IPFS
          </div>
          <div className="visit">
            <a
              href="https://campustocrypto.eth.limo"
              target="blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
            <GoArrowUpRight color="black" />
          </div>
        </div>
        {/* SECTION 1 */}
        <div className="section1">
          <div className="section1-left">
            Access the power of <br />
            <span>{typeEffect}</span>
            <Cursor style={{ color: "white" }} />
          </div>
          {/* <div className="section1-right">
            
            <span>
              Blockchain technology that enables secure and transparent
              record-keeping of transactions across a network of computers. It
              was originally designed as the underlying technology for the
              cryptocurrency Bitcoin.
            </span>
          </div> */}
        </div>
        {/* {popup section} */}
        {/* {showPop && (
  <Popup
    open={true}
    contentStyle={{ textAlign: 'center', maxWidth: 'auto', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', background: 'rgb(255,255,255)', margin: '25px auto auto auto' }}
    overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    className="popup-main-container">
    <div className="popup-contentner">
      <span className="popup-main-close-btn" onClick={() => setShowPop(false)}>&times;</span>
      <img className="image-popup" src={popupPerson.image} alt={popupPerson.name} />
      <h4 className="h4-name">{popupPerson.name}</h4>
      {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? (
        <p className="register-des">Seminar is live now 🎊!</p>
      ) : (
        <p className="register-des">Register now to join {popupPerson.name}'s session!</p>
      )}
      
      <div className="countdown-container">
        <span className="countdown-number-big">
          {countdown.days.toString().padStart(2, '0')} :
        </span>
        <span className="countdown-number-big">
          {countdown.hours.toString().padStart(2, '0')} :
        </span>
        <span className="countdown-number-big">
          {countdown.minutes.toString().padStart(2, '0')} :
        </span>
        <span className="countdown-number-big">
          {countdown.seconds.toString().padStart(2, '0')}
        </span>
      </div>
      {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? 
      <a href={popupPerson.joinNow} target="blank" rel="noopener noreferrer">Join now!</a> : (
        <a href={popupPerson.registrationLink} target="_blank" rel="noopener noreferrer">Register now!</a>
      )}
    </div>
  </Popup>
)} */}
        {/* confetti */}
        {/* {timerEnded && <Confetti />} */}
        {/* add youtube video here */}
        {Showpopuprev && (
          <Popup
            open={true}
            contentStyle={{
              textAlign: "center",
              maxWidth: "auto",
              borderRadius: "15px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              background: "rgb(255,255,255)",
              margin: "25px auto auto auto",
            }}
            overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="popup-main-container"
          >
            <div className="popup-contentner popup-Ytub">
              <span
                className="popup-main-close-btn"
                onClick={() => setShowpopuprev(false)}
              >
                &times;
              </span>
              {/* Replace the image and text with the YouTube embed code */}
              <iframe
                width="100%"
                height="100%"
                src={popupPerson.Ytubevideo}
                frameborder="0"
                allowfullscreen
                title="campus to crypto"
                autoFocus
              ></iframe>
            </div>
          </Popup>
        )}

        {/* {notification} */}
        {/* <div>
        {showNotification && (
          <div className="notification-wrapper">
            <div className="external-notification">
              <Notification 
                message={
                  <>
                    {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? (
                      <span>session is live now join now! <a href={popupPerson.joinNow} target="_blank" rel="moreferrer">click Now</a>!</span>
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
      </div> */}

        {/* SECTION 2 */}
        <div className="new-mobile">
          <div className="grid-container">
            <Link to={"/community"}>
              <div className="item item-1 button-49">Join Us 🎯</div>
            </Link>
            <Link to={"/project"}>
              <div className="item item-2 button-49 btn-49">
                <span className="num num30+" data-val="40">
                  30+
                </span>{" "}
                Project
              </div>
            </Link>
            <div className="item item-3">
              C2C Join our Community, We are waiting for you
            </div>
            <div className="item item-4">
              POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE
              WORLD
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2-left">
            <img src={Bimage} alt="img" />{" "}
          </div>
          <div className="section2-right">
            <div className="right-side-1">
              {/* <img src={Square} alt="img" /> */}
            </div>
            <div className="right-side-2">
              <img src={Shape} alt="img" />
            </div>
            <div className="right-side-3">
              Chain of Community Chain of Block,
              <div className="profile">
                <div className="image">
                  <img src={Person1} alt="img" />
                  <img src={Person2} alt="img" />
                  <img src={Person3} alt="img" />
                  <img src={Person4} alt="img" />
                </div>
                <div className="join">
                  Join our Community, We are waiting for you
                </div>
              </div>
            </div>
            <Link to="/Community">
              <div className="try-free">
                Join Us <GoArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="section3">
          {/* <div className="section3-up section-margin">
            <p>SPECIAL SPONSOR</p>
          </div> */}
          <div className="section3-up">PARTNER/SUPPORT</div>
          <div className="section3-down">
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
        {/* SECTION 4 */}
        <div className="cards">
          <div className="card">
            Explore the power of Blockchain
            <p>
              Explore the future of social interaction with our innovative
              blockchain-based social media platform! Join us today to
              experience decentralized.
            </p>
            <div className="buttons">
              <Link to={Ylink} style={{ color: "white" }} target="__blank">
                <button>
                  INSTAGRAM <img src={YTicon} alt="Instagram icon" />
                </button>
              </Link>
              <Link to={Tlink} style={{ color: "white" }} target="__blank">
                <button>
                  TWITTER <img src={Podcast} alt="Twiiter icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="card" id="subscribe">
            Connect through the Blockchain
            <p>
              Subscribe now and join our blockchain community today to be part
              of the future of decentralized technology!
            </p>
            <div className="discussionSection">
              <form action="" onSubmit={subscribe}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  required
                />
                {/* {formData.errors.email &&( <span>{formData.errors.email}</span>)} */}
                <button type="submit">Subscribe</button>
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
                  <h3 className="popup-title">Congratulations! 🎉!</h3>
                  <p className="popup-message">
                    You've officially joined the ranks of our newsletter
                    subscribers
                  </p>
                </div>
              </Popup>
            </div>
          </div>
        </div>
        <div className="backgroungImg">
          <img src={Backimg} alt="img" />
        </div>
        {/* SECTION 5 */}
        <div className="section5">
          <h2> Our Guest's & Speakers</h2>
          <div className="speaker-list">
            {data.map((item, index) => (
              <div className="speakers" key={index}>
                <img src={item.image} alt="speaker img" />
                {item.name}
                <h4>{item.role}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6 */}
        <div>
          <CountComponent count={count} />
        </div>

        <div className="section7">
          <h1>Journey Through Art of community</h1>
          <div className="section7-content">
            <div className="content-sec1">
              <div className="content-left">
                <div className="block1">
                  <h2>2018</h2>
                  <span>
                    Got the first funding from CUTM to build the mining rig
                    inside the University for educational purposes.
                  </span>
                </div>
                <div className="block2">
                  <img src={image1} alt="img" />
                </div>
              </div>
              <div className="content-right">
                <img src={image2} alt="img2" />
              </div>
            </div>
            <div className="content-sec2">
              <div className="content-left">
                <div className="block2">
                  <img src={image3} alt="img" />
                </div>
                <div className="block1">
                  <h2>2019</h2>
                  <span>
                    In 2019, launched our first DAPP name "Blockation".
                  </span>
                </div>
              </div>
              <div className="content-right">
                <img src={image5} alt="img2" />
              </div>
            </div>
            <div className="content-sec1">
              <div className="content-left">
                <div className="block1">
                  <h2>2020</h2>
                  <span>
                    Started Blockchain Skill Courses in all the campus.
                  </span>
                </div>
                <div className="block2">
                  <img src={image4} alt="img" />
                </div>
              </div>
              <div className="content-right">
                <img src={image7} alt="img2" />
              </div>
            </div>
            <div className="content-sec2">
              <div className="content-left">
                <div className="block2">
                  <img src={image6} alt="img" />
                </div>
                <div className="block1">
                  <h2>2021</h2>
                  <span>
                    Launched web application of our first DAPP names
                    "Blockcation".
                  </span>
                </div>
              </div>
              <div className="content-right">
                <img src={image8} alt="img2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
