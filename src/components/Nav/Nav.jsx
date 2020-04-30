import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import scrollToPage from "../../utils";
import "./Nav.css";

const Nav = () => {
  const [elementInView, setElementInView] = useState(null);
  const {
    appScrollTop,
    aboutOffsetTop,
    projectsOffsetTop,
    contactOffsetTop,
  } = useContext(AppContext);

  // Nav links watch scroll position to display which page is in the viewport
  useEffect(() => {
    const onScroll = () => {
      if (contactOffsetTop && appScrollTop > contactOffsetTop - 700) {
        setElementInView("contact");
      } else if (projectsOffsetTop && appScrollTop > projectsOffsetTop - 300) {
        setElementInView("projects");
      } else if (aboutOffsetTop && appScrollTop > aboutOffsetTop - 100) {
        setElementInView("about");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [appScrollTop, aboutOffsetTop, contactOffsetTop, projectsOffsetTop]);
  return (
    <nav className="topbar">
      <div
        className="topbar-links-container-on"
        // className={
        //   this.state.navOpacityFull
        //     ? "topbar-links-container-on"
        //     : "topbar-links-container-off"
        // }
      >
        <div>
          <button
            className="nav-link-topbar button-reset"
            type="button"
            onClick={() => scrollToPage(".App")}
          >
            <img
              className="self-portrait"
              src="https://res.cloudinary.com/kboyle/image/upload/v1587593766/Portfolio/logo.png"
              alt="Kevin Boyle"
              title="Back to Top"
            />
          </button>
        </div>
        <div className="nav-links-right">
          <button
            className={
              elementInView === "about"
                ? "nav-link-topbar button-reset nav-link-underline"
                : "nav-link-topbar button-reset nav-link-reverse-underline"
            }
            type="button"
            title="go to about section"
            onClick={() => scrollToPage(".about-container")}
          >
            About
          </button>
          <button
            className={
              elementInView === "projects"
                ? "nav-link-topbar button-reset nav-link-underline"
                : "nav-link-topbar button-reset nav-link-reverse-underline"
            }
            type="button"
            title="go to gallery section"
            onClick={() => scrollToPage(".projects-container")}
          >
            Projects
          </button>
          <button
            className={
              elementInView === "contact"
                ? "nav-link-topbar button-reset nav-link-underline"
                : "nav-link-topbar button-reset nav-link-reverse-underline"
            }
            type="button"
            title="go to contact section"
            onClick={() => scrollToPage(".contact-container")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
