/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__section footer__section--left">
        K<span className="display-none-sm-scrn">evin</span>
        &nbsp;Boyle
      </div>
      <div className="footer__section footer__section--right flex-container--centered">
        <address>boyle.kevin.michael@gmail.com</address>
      </div>
    </footer>
  );
}

export default Footer;
