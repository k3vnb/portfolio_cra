import React from "react";
import WebProjectCard from "../WebProjectCard/WebProjectCard";
import { projectsData } from "../../STORE";
import "./WebProjectsList.css";

const WebProjectsList = () => {
  return (
    <>
      <h2>Web Projects List</h2>
      <div className="web-projects-container">
        {projectsData.map((project) => (
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
};

export default WebProjectsList;
