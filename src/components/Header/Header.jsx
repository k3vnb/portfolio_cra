import React from "react";
// import { Parallax } from "react-scroll-parallax";
// import ParalaxCache from "../ParallaxCache/ParallaxCache";
import scrollToPage from "../../utils";
import "./Header.css";

const Header = () => {
  const handleOnKeyDown = (e, goTo) => {
    if (e.key === "Enter") {
      scrollToPage(goTo);
    }
  };
  return (
    // <ParalaxCache>
    //   <Parallax className="parallax-container2" y={[0, 20]}>
    <header className="header__container">
      <h1 className="header__title">Kevin &nbsp;Boyle</h1>
      <h2 className="header__subtitle">Web Developer</h2>
      <nav className="header__link-container">
        <div
          tabIndex={0}
          className="header__nav-link flex-container--centered"
          title="go to about section"
          role="button"
          onKeyDown={(e) => handleOnKeyDown(e, ".about-container")}
          onClick={() => scrollToPage(".about-container")}
        >
          About
        </div>
        <div
          tabIndex={0}
          className="header__nav-link flex-container--centered"
          title="go to projects section"
          role="button"
          onKeyDown={(e) => handleOnKeyDown(e, ".projects-container")}
          onClick={() => scrollToPage(".projects-container")}
        >
          Projects
        </div>
        <div
          tabIndex={0}
          className="header__nav-link flex-container--centered"
          title="go to contact section"
          role="button"
          onKeyDown={(e) => handleOnKeyDown(e, ".contact-container")}
          onClick={() => scrollToPage(".contact-container")}
        >
          Contact
        </div>
      </nav>
    </header>
    //   </Parallax>
    // </ParalaxCache>
  );
};

export default Header;
