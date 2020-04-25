import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer--right">
        <h3>Kevin Boyle</h3>
      </div>
      <div className="footer--left">
        <h3 className="footer-left">
          <span className="display-none-sm-scrn">email me at </span>{" "}
          boyle.kevin.michael@gmail.com
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
