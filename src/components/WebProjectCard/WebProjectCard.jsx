import React from "react";

const WebProjectCard = ({
  title,
  description,
  techStack,
  websiteURL,
  githubURL,
}) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{techStack}</p>
      <a href={websiteURL}>{websiteURL}</a>
      <a href={githubURL}>{githubURL}</a>
    </article>
  );
};

export default WebProjectCard;
