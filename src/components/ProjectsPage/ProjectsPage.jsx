import React from "react";
import ProjectsBanner from "../ProjectsBanner/ProjectsBanner";
import WebProjectsList from "../WebProjectsList/WebProjectsList";
import ArtGallery from "../ArtGallery/ArtGallery";
import "./ProjectsPage.css";

const ProjectsPage = () => (
  <section className="projects-container">
    <ProjectsBanner />
    <WebProjectsList />
    <ArtGallery />
  </section>
);

export default ProjectsPage;
