import React from "react";
import ContactBanner from "../ContactBanner/ContactBanner";
import "./ContactPage.css";

function Contact() {
  return (
    <div>
      <div className="before-contact">
        <ContactBanner />
      </div>
      <div className="contact-container">
        <div className="contact-page-inner">
          <div className="contact-box contact-top-left">
            <a
              href="mailto:boyle.kevin.michael@gmail.com?Subject=Hi%20Kevin"
              title="email boyle.kevin.michael@gmail.com"
            >
              <img
                className="gmail-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104702/Portfolio/gmail-icon.png"
                alt="boyle.kevin.michael@gmail.com"
              />
            </a>
          </div>
          <div className="contact-box contact-top-right">
            <a
              href="http://www.github.com/lemurriot"
              target="_blank"
              title="Go to Kevin's Github"
            >
              <img
                className="github-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104685/Portfolio/github-icon.png"
              />
            </a>
          </div>
          <div className="contact-box contact-bottom-left">
            <a
              href="http://www.instagram.com/k3vnb33"
              target="_blank"
              title="Go to Kevin's Instagram"
            >
              <img
                className="instagram-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104710/Portfolio/Instagram-icon.png"
              />
            </a>
          </div>
          <div className="contact-box contact-bottom-right">
            <a
              href="http://www.linkedin.com/in/boylekev"
              target="_blank"
              title="Go to Kevin's LinkedIn"
            >
              <img
                className="linkedin-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104717/Portfolio/linkedin-icon.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
