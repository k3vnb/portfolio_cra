import React from "react";
import { Parallax } from "react-scroll-parallax";
import ParallaxCache from "../ParallaxCache/ParallaxCache";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <ParallaxCache>
      <Parallax
        className="contact-parallax-container1"
        y={[-90, 90]}
        tag="figure"
      >
        <div className="contact-banner-container">
          <img
            className="contact-banner"
            src="https://res.cloudinary.com/kboyle/image/upload/v1587537963/Portfolio/body-bg.svg"
            alt=""
          />
          <h1 className="contact-title">Contact</h1>
        </div>
      </Parallax>
    </ParallaxCache>
  );
};

export default ContactBanner;
