import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { string } from "prop-types";
import "./WebProjectCard.css";

const WebProjectCard = ({
  title,
  description,
  techStack,
  imageURL,
  webpageURL,
  githubURL,
}) => {
  const [cardPosition, setCardPosition] = useState({});
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardPosition({
        top: cardRef.current.getBoundingClientRect().bottom,
        height: cardRef.current.getBoundingClientRect().height,
      });
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, [cardRef]);

  useLayoutEffect(() => {
    function updatePosition() {
      setCardPosition({
        top: cardRef.current.getBoundingClientRect().bottom,
        height: cardRef.current.getBoundingClientRect().height,
      });
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition();
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    };
  }, []);
  const cardYPositionIsCenter = Math.abs(
    cardPosition.top - cardPosition.height / 2 - windowHeight / 2
  );
  const cardIsNearCenter = windowWidth < 1250 && cardYPositionIsCenter < 100;
  const scale = windowWidth < 1250 ? 1 - cardYPositionIsCenter / 35000 : 1;
  const boxShadow = cardIsNearCenter
    ? "0 12px 22px rgba(0,0,0,0.25), 0 8px 8px rgba(0,0,0,0.15)"
    : "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)";

  return (
    <article
      ref={cardRef}
      className="card"
      style={{
        transform: `scale(${scale})`,
        boxShadow,
      }}
    >
      <div className="card--top">
        <img src={imageURL} alt={title} />
      </div>
      <div className="card--bottom">
        <h4 className="card__title">{title}</h4>
        <div className="card--bottom__descriptions">
          <p className="card__description">{description}</p>
          <p className="card__second-description">{techStack}</p>
        </div>
        <div className="card__links-container">
          <div className="card__link-container">
            <h5>Hosted Site:</h5>
            <a
              className="card__link"
              href={webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {webpageURL}
            </a>
          </div>
          <div className="card__link-container">
            <h5>Code Repository:</h5>
            <a
              className="card__link"
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubURL}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

WebProjectCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  techStack: string.isRequired,
  imageURL: string.isRequired,
  webpageURL: string.isRequired,
  githubURL: string.isRequired,
};

export default WebProjectCard;
