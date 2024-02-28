import React from 'react';
import { ButtonsType404PageStateDefault } from "../../404components/ButtonsType404PageStateDefault.jsx";
import "./404.css"; // Import 

const Four04 = ({ className}) => {
  return (
    <div className={"_404 " + className}>
      <div className="ellipse-32"></div>
      <div className="ellipse-33"></div>
      <div className="frame-115">
        {/* Your content here */}
      </div>
      <div className="frame10">
        {/* More content here */}
      </div>
      <div className="div-footer">
        {/* Footer content */}
      </div>
      <div className="group-1171275443">
        <img className="_20" src="https://campus-crypto.s3.eu-north-1.amazonaws.com/ICONS/404.png" alt="Oops" />
        <div className="oops-page-not-found">Oops! Page Not Found. </div>
        <div className="_4042">404 </div>
        <div className="_404-error-on-the-servers-of-the-page-you-expect-to-reach-on-a-website-http-status-code-that-means-it-could-not-be-found">
          404 error on the servers of the page you expect to reach on a website
          <br />
          HTTP status code that means it could not be found.{" "}
        </div>
        <ButtonsType404PageStateDefault
          type="404-page"
          className="buttons-instance"
        ></ButtonsType404PageStateDefault>
      </div>
    </div>
  );
};

export default Four04; // Export the Four04 component
