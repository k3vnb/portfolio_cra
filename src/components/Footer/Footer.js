import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__section footer__section--right">Kevin Boyle</div>
      <div className="footer__section footer__section--left flex-container--centered">
        <span className="display-none-sm-scrn">email me at &nbsp;</span>
        <address>boyle.kevin.michael@gmail.com</address>
      </div>
    </footer>
  );
}

export default Footer;
