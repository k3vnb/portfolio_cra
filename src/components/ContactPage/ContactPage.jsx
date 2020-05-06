import React, { useRef, useEffect, useContext } from "react";
import AppContext from "../../AppContext";
import ContactBanner from "../ContactBanner/ContactBanner";
import "./ContactPage.css";

const ContactPage = () => {
  const { setOffsetTop } = useContext(AppContext);
  const ref = useRef();

  useEffect(() => {
    const getElementOffsetTop = () => {
      if (ref.current) {
        setOffsetTop("contact", ref.current.offsetTop);
      }
    };
    getElementOffsetTop();
    window.addEventListener("resize", getElementOffsetTop);
    return () => {
      window.removeEventListener("resize", getElementOffsetTop);
    };
  }, [setOffsetTop]);

  return (
    <>
      <ContactBanner />
      <section className="contact-container" ref={ref}>
        <ul className="contact-page__inner ul-reset">
          <li className="contact-page__box contact-page__box--top-left">
            <a
              href="mailto:boyle.kevin.michael@gmail.com?Subject=Hi%20Kevin"
              title="email boyle.kevin.michael@gmail.com"
            >
              <img
                className="gmail-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104702/Portfolio/gmail-icon.png"
                alt="gmail icon"
              />
            </a>
          </li>
          <li className="contact-page__box contact-page__box--top-right">
            <a
              href="http://www.github.com/lemurriot"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to Kevin's Github"
            >
              <img
                className="github-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104685/Portfolio/github-icon.png"
                alt="github icon"
              />
            </a>
          </li>
          <li className="contact-page__box contact-page__box--bottom-left">
            <a
              href="http://www.instagram.com/k3vnb33"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to Kevin's Instagram"
            >
              <img
                className="instagram-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/c_scale,w_350/v1588104710/Portfolio/ig-icon.png"
                alt=""
              />
            </a>
          </li>
          <li className="contact-page__box contact-page__box--bottom-right">
            <a
              href="http://www.linkedin.com/in/boylekev"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to Kevin's LinkedIn"
            >
              <img
                className="linkedin-icon icon"
                src="https://res.cloudinary.com/kboyle/image/upload/v1588104717/Portfolio/lnkdn-icon.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default ContactPage;
