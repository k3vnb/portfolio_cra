import React from "react";
import WebProjectCard from "../WebProjectCard/WebProjectCard";
import "./WebProjectsList.css";

const projectsData = [
  {
    title: "NomsPDX",
    description:
      "What's the best burger in Portland? Best Sushi? Best Pizza? This full stack app let's users vote and comment on their favorite food places in Portland.",
    techStack:
      "A fullstack web app. This project utilizes the PERN stack (Postgres, Express, React, Node), Google OAuth & Places API, Material-UI, etc",
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/c_scale,q_65,w_348/v1588057214/Portfolio/NomsPDX.png",
    webpageURL: "https://nomspdx.com/",
    githubURL: "https://github.com/lemurriot/nom_client",
  },
  {
    title: "PDX Dashboard",
    description: "News, Events, and Information for Portland, OR",
    techStack:
      "Client-side jQuery produced page pulling real-time API information.",
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/c_scale,q_35,w_375/v1588057465/Portfolio/PDXDashboard.png",
    webpageURL: "https://lemurriot.github.io/pdx_dashboard/",
    githubURL: "https://github.com/lemurriot/pdx_dashboard",
  },
  {
    title: "Sieve Jobs",
    description: "Job Interview preparation flash-card app.",
    techStack: "Client-side React app with custom Webpack build",
    imageURL:
      "https://res.cloudinary.com/kboyle/image/upload/c_scale,q_47,w_365/v1588057480/Portfolio/sieve-jobs1.png",
    webpageURL: "https://sieve-jobs.herokuapp.com/",
    githubURL: "https://github.com/lemurriot/Sieve_Jobs",
  },
];

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
