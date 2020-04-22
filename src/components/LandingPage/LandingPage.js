import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
// import GalleryList from "./GalleryList";
// import Contact from "./Contact";
// import Nav from "./Nav";
// import About from "./About/About";
import { ParallaxProvider } from "react-scroll-parallax";
import "./LandingPage.css";

function LandingPage() {
  return (
    <ParallaxProvider>
      <>
        <HeaderPage />
        {/* <About />
        <GalleryList />
        <Contact />
        <Nav /> */}
      </>
    </ParallaxProvider>
  );
}

export default LandingPage;
