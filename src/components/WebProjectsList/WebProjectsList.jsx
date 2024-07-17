import React from "react";
import WebProjectCard from "../WebProjectCard/WebProjectCard";
import { PROJECT_LIST } from "./constants";
import "./WebProjectsList.css";

const WebProjectsList = () => (
  <>
    <h3 className="web-projects-list__title">Sample Web Projects</h3>
    <div className="web-projects-list__container">
      {PROJECT_LIST.map((project) => (
        <WebProjectCard
          key={project.title}
          imageURL={project.imageURL}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          webpageURL={project.webpageURL}
          githubURL={project.githubURL}
        />
      ))}
    </div>
  </>
);

export default WebProjectsList;
