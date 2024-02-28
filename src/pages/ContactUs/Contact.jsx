import React, { useState, useEffect } from "react";
// import { FaLinkedinIn } from "react-icons/fa6";
// import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';
// import axios from 'axios';
// import { NavLink } from "react-router-dom";
import "./Contact.css";
import Contact1 from "../../Assets/svg/Yuppies Chat.svg";
const Person1 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/members/siddarth-kumar.jpeg";
const Person2 = "https://campus-crypto.s3.eu-north-1.amazonaws.com/Campus+2+Crypto/members/chirpa.jpeg"
const Contact = () => {
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
  const peopleData = [
    { name: 'Siddharth Kumar', imgSrc: Person1 },
    { name: 'Chira Rajeswari Sushree Maharani', imgSrc: Person2 },
  ];

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

  const handleSubmit = (e) => {
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
    <div className="contact-circle-top"></div>
      <div className="contact-page">
        <h5>Contact Us</h5>
        <form className="form" onSubmit={handleSubmit}>
          <div className="contact-left-side">
            <div className="name-field">
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
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
            />
            {formData.errors.email &&( <span>{formData.errors.email}</span>)}
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
            <input type="textarea" placeholder="Leave a Message" name="message" value={formData.message}
                  onChange={handleChange} />
            <button type="submit">Send a Message</button>
          </div>
          <div className="contact-right-side">
            <img src={Contact1} alt="icon" />
          </div>
        </form>
        <div className="c-section2">
          <h3>
            Our <span>Member</span>
          </h3>
          <h6>
            With our intuitive interface and user-friendly features, you can
            easily create and manage your data, reports, and more.{" "}
          </h6>
          <div className="photos">
            {peopleData.map((person, index) => (
              <div className="person1" key={index}>
                <img src={person.imgSrc} alt="img" />
                <h3>{person.name}</h3>
                {/* <span><FaLinkedinIn /></span> */}
              </div>
            ))}
          </div>
        </div>
        <div className="FAQ-section">
          <div className="faq-head">
            <h6>FAQs</h6>
            Frequently Asked Questions
          </div>
          <div className="questions">
          <div className="faq-1">
            <details>
              <summary>What is Campus to Crypto?</summary>
              <p>             
                Campus to Crypto is a community initiative empowering individuals, especially students, to learn about blockchain technology, develop their own blockchain applications, and explore opportunities in the cryptocurrency space.
              </p>
            </details>
          </div>
          <div className="faq-1">
            <details>
              <summary>What kind of activities does Campus to Crypto organize?</summary>
              <p>
                Campus to Crypto organizes workshops, seminars, webinars, and networking events to educate members about cryptocurrency, blockchain technology, and foster collaboration and innovation within the community.
              </p>
            </details>
          </div>
          <div className="faq-1">
            <details>
              <summary>Is there a membership fee to join Campus to Crypto?</summary>
              <p>
                No, there is no membership fee to join Campus to Crypto. We believe in making cryptocurrency education accessible to everyone, regardless of financial constraints.
              </p>
            </details>
          </div>
          <div className="faq-1">
            <details>
              <summary>How can I stay updated with Campus to Crypto events and announcements?</summary>
              <p>
              Stay updated with Campus to Crypto events and announcements by subscribing to our newsletter. Receive regular updates on workshops, seminars, and networking opportunities. Subscribe now!
              </p>
            </details>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
