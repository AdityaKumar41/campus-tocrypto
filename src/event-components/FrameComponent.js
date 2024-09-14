import React from "react";
import "./FrameComponent.css";
// import { Link } from "react-router-dom";
// import Bootcamp from "../pages/bootcamp/Bootcamp";
const FrameComponent = () => {
  const UpcomingEvenet = [
    {
      image: "/rectangle-12@2x.png",
      title: "Avalanche Live Workshop at CUTM.",
      subtitle:
        "Exploring the Future of Decentralized Oracles and Smart Contracts with Industry Leaders",
      year: "2024",
      month: "SEP",
      date: "",
      link: "/event-details/1",
    },
  ];
  return (
    <section className="page-child">
      <div className="frame-container">
        <div className="upcoming-events-wrapper">
          <h1 className="upcoming-events">
            <span>Upcoming</span>
            <span className="span">{` `}</span>
            <span className="events">Events</span>
          </h1>
        </div>
        <div className="frame-div">
          {UpcomingEvenet.map((items, key) => {
            return (
              <div className="rectangle-container" key={key}>
                <img
                  className="frame-child2"
                  loading="lazy"
                  alt=""
                  src={items.image}
                />
                <div className="rectangle-parent1">
                  {/* <div className="rectangle-div"></div> */}
                  <div className="frame-wrapper1">
                    <div className="frame-parent1">
                      <div className="apr-wrapper">
                        <b className="apr">{items.year}</b>
                      </div>
                      <div className="apr-wrapper">
                        <b className="apr">{items.month}</b>
                      </div>
                      <div className="wrapper">
                        <b className="b">{items.date}</b>
                      </div>
                    </div>
                  </div>

                  <div className="frame-parent2">
                    <div className="wonder-girls-2010-wonder-girls-parent">
                      <b className="wonder-girls-2010">{items.title}</b>
                      <div className="well-get-you">{items.subtitle}</div>
                    </div>
                    <div className="view-more">
                      <a href={items.link}>View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="error-handler">
          <div className="data-transmitter">
            <div className="web-scraper">
              <h1 className="join-these-brands">Supported by</h1>
            </div>
            <div className="weve-had-the">
              We've had the pleasure of inviting and working with industry.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
