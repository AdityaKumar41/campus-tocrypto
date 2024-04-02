import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./GroupComponent2.css";
const GroupComponent2 = () => {
  const [timerEnded, setTimerEnded] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const futureDate = new Date("2024-04-01T20:00:00"); // Set your future date here
    const interval = setInterval(() => {
      const now = new Date();
      const difference = futureDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        // adding ending interval of the timer
        setTimerEnded(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // after timer end
  // object here
  const groupDetails = {
    group1: { title: "Bootcamp 2024", heading: "Chainlink", date: "1-12 April 2024", Time: "08-10 PM", location: "CUTM Bhubaneswar", Redgh: "https://lu.ma/ChainlinkBootcamp2024?utm_source=012moiiuvdi2",joinLink:"https://www.youtube.com/live/HESiYxxcLhY?si=g8jYoui_G2E6JpMI" },
    group2: { title: "Chainlink Live Workshop 2024", heading: "Chainlink", date: "To Be Announced!", Time: "00-00 PM", location: "CUTM Bhubaneswar", Redgh: "#" }
  }
  let { id } = useParams();
  let content;
  if (id === '1') {
    content = (
      <section className="group-section">
        <div className="frame-child13" />
        <div className="rectangle-parent10">
          <div className="frame-child14" />
          <b className="boot-camp-2024">{groupDetails.group1.title}</b>
        </div>
        <div className="frame-wrapper5">
          <div className="frame-parent6">
            <div className="frame-wrapper6">
              <div className="blockchain-label-parent">
                <div className="blockchain-label">
                  <b className="blockchain">{groupDetails.group1.heading}</b>
                  <div className="april-2024-wrapper">
                    <b className="april-2024">{groupDetails.group1.date}</b>
                  </div>
                </div>
                <div className="frame-wrapper7">
                  <div className="frame-parent7">
                    <div className="time-wrapper">
                      <b className="time">Time</b>
                    </div>
                    <b className="pm">{groupDetails.group1.Time}</b>
                  </div>
                </div>
                <div className="location-parent">
                  <b className="location">Location</b>
                  <b className="online-mode">{groupDetails.group1.location}</b>
                </div>
              </div>
            </div>
            <div className="frame-parent8">
              <div className="vector-wrapper">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/bootcam-group.svg"
                />
              </div>
              <div className="frame-parent9">
                <div className="button-instance-wrapper">
                  {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? (
                    <b className="bootcamp-live">Bootcamp is live 🎊!</b>
                  ) : (
                    <b className="button-instance"><div className="countdown-container">
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
                    </b>
                  )}

                </div>
                {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? (
                  <>
                  <button className="button1">
                    <div className="text1">
                      <div className="try-for-free1"><a href={groupDetails.group1.joinLink} target='_blank' rel='noreferrer'>Join Here</a></div>
                    </div>
                  </button>
                </>
                ) : (
                  <>
                    <button className="button1">
                      <div className="text1">
                        <div className="try-for-free1"><a href={groupDetails.group1.Redgh} target='_blank' rel='noreferrer'>Register Now</a></div>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (id === '2') {
    content = (
      <section className="group-section">
        <div className="frame-child13" />
        <div className="rectangle-parent10">
          <div className="frame-child14" />
          <b className="boot-camp-2024">{groupDetails.group2.title}</b>
        </div>
        <div className="frame-wrapper5">
          <div className="frame-parent6">
            <div className="frame-wrapper6">
              <div className="blockchain-label-parent">
                <div className="blockchain-label">
                  <b className="blockchain">{groupDetails.group2.heading}</b>
                  <div className="april-2024-wrapper">
                    <b className="april-2024">{groupDetails.group2.date}</b>
                  </div>
                </div>
                <div className="frame-wrapper7">
                  <div className="frame-parent7">
                    <div className="time-wrapper">
                      <b className="time">Time</b>
                    </div>
                    <b className="pm">{groupDetails.group2.Time}</b>
                  </div>
                </div>
                <div className="location-parent">
                  <b className="location">Location</b>
                  <b className="online-mode">{groupDetails.group2.location}</b>
                </div>
              </div>
            </div>
            <div className="frame-parent8">
              <div className="vector-wrapper">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/bootcam-group.svg"
                />
              </div>
              <div className="frame-parent9">
                <div className="button-instance-wrapper">
                  <b className="button-instance">00:00:00:00</b>
                </div>
                <button className="button1 no-work-btn" style={{ cursor: 'not-allowed' }}>
                  <div className="text1">
                    <div className="inactive-btn" ><a href={groupDetails.group2.Redgh}>Register Now</a></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return content;
};
export default GroupComponent2;
