import "./WideScreenOffline.css";
import React from "react";
export const WideScreenOffline = ({ className, ...props }) => {
  return (
    <div className={"wide-screen-offline " + className}>
      <img className="vector" src="vector0.svg" />
      <div className="frame-2">
        <img className="vector2" src="vector1.svg" />
        <div className="you-re-offline">You’re offline </div>
        <div className="please-connect-to-the-internet-and-try-again">
          Please connect to the internet and try again.{" "}
        </div>
        <div className="frame-1">
          <img className="vector3" src="vector2.svg" />
          <div className="retry">Retry </div>
        </div>
      </div>
    </div>
  );
};
