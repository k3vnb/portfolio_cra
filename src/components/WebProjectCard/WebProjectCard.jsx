import React from "react";
import "./WebProjectCard.css";

const WebProjectCard = ({
  title,
  description,
  techStack,
  imageURL,
  webpageURL,
  githubURL,
}) => {
  return (
    <article className="card">
      <img className="card__thumbnail" src={imageURL} alt={title} />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      <p className="card__second-description">{techStack}</p>
      <a className="card__a" href={webpageURL}>{webpageURL}</a>
      <br />
      <a className="card__b" href={githubURL}>{githubURL}</a>
    </article>
  );
};

export default WebProjectCard;
