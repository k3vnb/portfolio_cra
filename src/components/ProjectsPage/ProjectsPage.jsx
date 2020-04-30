import React, { useRef, useEffect, useContext } from "react";
import ProjectsBanner from "../ProjectsBanner/ProjectsBanner";
import WebProjectsList from "../WebProjectsList/WebProjectsList";
import AppContext from "../../AppContext";
import ArtGallery from "../ArtGallery/ArtGallery";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const { setOffsetTop } = useContext(AppContext);
  const ref = useRef();

  useEffect(() => {
    const getElementOffsetTop = () => {
      if (ref.current) {
        setOffsetTop("projects", ref.current.offsetTop);
      }
    };
    getElementOffsetTop();
    window.addEventListener("resize", getElementOffsetTop);
    return () => {
      window.removeEventListener("resize", getElementOffsetTop);
    };
  }, [setOffsetTop]);

  return (
    <section className="projects-container" ref={ref}>
      <ProjectsBanner />
      <WebProjectsList />
      <ArtGallery />
    </section>
  );
};

export default ProjectsPage;
