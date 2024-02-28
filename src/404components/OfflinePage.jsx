import "./Offlinepage.css";
import React from "react";
import  WideScreenOffline  from "../../WideScreenOffline/WideScreenOffline.jsx";

export const Desktop3 = ({ className, ...props }) => {
  return (
    <div className={"desktop-3 " + className}>
      <div className="ellipse-34"></div>
      <WideScreenOffline className="wide-screen-offline-instance"></WideScreenOffline>
    </div>
  );
};
