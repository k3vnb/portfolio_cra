/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [showToast, setShowToast] = useState(false);
  const handleHideToast = () => setTimeout(() => setShowToast(false), 600);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("boyle.kevin.michael@gmail.com").then(
      () => setCopySuccess("copied!"),
      () => setCopySuccess("could not copy")
    );
    setShowToast(true);
    handleHideToast();
  };
  return (
    <footer className="footer__container">
      {showToast && <div className="footer__toast">{copySuccess}</div>}
      <div className="footer__section footer__section--left">
        K<span className="display-none-sm-scrn">evin</span>
        &nbsp;Boyle
      </div>
      <div className="footer__section footer__section--right flex-container--centered">
        <button
          type="button"
          title="click to copy to clipboard"
          className="button-reset flex-container--centered"
          onClick={copyToClipboard}
        >
          boyle.kevin.michael@gmail.com&nbsp;
          <img
            className="copy-icon"
            src="https://res.cloudinary.com/kboyle/image/upload/v1588723213/Portfolio/copy-text-svgrepo-com.svg"
            alt=""
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
