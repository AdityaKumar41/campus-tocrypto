import React from "react";

const ErrorPopup = ({ onClose }) => {
  return (
    <div className="error-popup-content">
      <span className="error-popup-close-btn" onClick={onClose}>&times;</span>
      <h3 className="error-popup-title">Oops! Something went wrong</h3>
      <p className="error-popup-message">We couldn't submit your form at the moment. Please try again later.</p>
    </div>
  );
};

export default ErrorPopup;
