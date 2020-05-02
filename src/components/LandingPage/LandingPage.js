import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderPage from "../HeaderPage/HeaderPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import Nav from "../Nav/Nav";
import AboutPage from "../AboutPage/AboutPage";

const LandingPage = () => (
  <>
    <Nav />
    <HeaderPage />
    <ParallaxProvider>
      <main>
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </ParallaxProvider>
  </>
);

export default LandingPage;
