import React from "react";
import WebProjectCard from "../WebProjectCard/WebProjectCard";

const projectsData = [
  {
    title: "NomsPDX",
    description:
      "What's the best burger in Portland? Best Sushi? Best Pizza? This full stack app let's users vote and comment on their favorite food places in Portland.",
    techStack:
      "A fullstack web app. This project utilizes the PERN stack (Postgres, Express, React, Node), Google OAuth & Places API, Material-UI, etc",
    webpageURL: "https://nomspdx.com/",
    githubURL: "https://github.com/lemurriot/nom_client",
  },
  {
    title: "Tropic Sunset",
    description:
      "This art project draws a unique rendition of a late summer sunset on each page load.",
    techStack: "Generative art with P5.js",
    webpageURL: "https://nomspdx.com/",
    githubURL: "https://github.com/lemurriot/nom_client",
  },
  {
    title: "Sieve Jobs",
    description: "This is a job interview preparation flash-card app",
    techStack:
      "This is a client-side static app built with React (v.15.5.4) & custom Webpack.",
    webpageURL: "https://sieve-jobs.herokuapp.com/",
    githubURL: "https://github.com/lemurriot/Sieve_Jobs",
  },
];

const WebProjectsList = () => {
  return (
    <>
      <h2>Web Projects List</h2>
      {projectsData.map(project => (
        <WebProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          webpageURL={project.webpageURL}
          githubURL={project.githubURL}
        />
      ))}
    </>
  );
};

export default WebProjectsList;
