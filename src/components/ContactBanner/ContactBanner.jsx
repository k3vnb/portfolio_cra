import React from "react";
import { Parallax } from "react-scroll-parallax";
import ParallaxCache from "../ParallaxCache/ParallaxCache";
import "./ContactBanner.css";

const ContactBanner = () => (
  <ParallaxCache>
    <Parallax className="contact-banner" y={[-80, 25]} tagOuter="div">
      <img
        className="contact-banner__image"
        src="https://res.cloudinary.com/kboyle/image/upload/v1587537963/Portfolio/body-bg.svg"
        alt=""
      />
      <h2 className="contact-banner__title">Contact</h2>
    </Parallax>
  </ParallaxCache>
);

export default ContactBanner;
