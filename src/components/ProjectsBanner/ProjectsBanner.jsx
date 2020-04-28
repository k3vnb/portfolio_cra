import React from "react";
import { Parallax } from "react-scroll-parallax";
import ParallaxCache from "../ParallaxCache/ParallaxCache";
import "./ProjectsBanner.css";

const ProjectsBanner = () => {
  return (
    <ParallaxCache>
      <div className="projects-banner__container">
        <Parallax className="projects-banner__title" y={[5, 245]} tagOuter="h2">
          Projects
        </Parallax>
      </div>
    </ParallaxCache>
  );
};

export default ProjectsBanner;
