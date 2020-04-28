import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderPage from "../HeaderPage/HeaderPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
// import Contact from "./Contact";
import Nav from "../Nav/Nav";
import AboutPage from "../AboutPage/AboutPage";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <Nav />
      <HeaderPage />
      <ParallaxProvider>
        <AboutPage />
        <ProjectsPage />
      </ParallaxProvider>
      {/* <Contact /> */}
    </>
  );
}

export default LandingPage;
