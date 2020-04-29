import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderPage from "../HeaderPage/HeaderPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
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
        <ContactPage />
      </ParallaxProvider>
    </>
  );
}

export default LandingPage;
