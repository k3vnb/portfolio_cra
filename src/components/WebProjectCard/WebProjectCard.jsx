import React, { useEffect, useState } from "react";
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
  const [showImg, setShowImg] = useState(false);

  // Thumbnail imgs are loaded asyncronously to improve performance metrics
  useEffect(() => {
    const onScroll = () => !showImg && setShowImg(true);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showImg]);

  return (
    <article className="card">
      <div className="card--top">
        {showImg && <img className="card--thumbnail" src={imageURL} alt={title} />}
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
