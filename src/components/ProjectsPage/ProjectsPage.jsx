import React from "react";
import ProjectsBanner from "../ProjectsBanner/ProjectsBanner";
import WebProjectsList from "../WebProjectsList/WebProjectsList";
import "./ProjectsPage.css";

const ProjectsPage = () => (
  <section className="projects-container">
    <ProjectsBanner />
    <WebProjectsList />
  </section>
);

export default ProjectsPage;
