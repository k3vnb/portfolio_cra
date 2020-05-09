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
    <nav className="nav">
      <div className="nav__inner">
        <button
          className="nav__link button-reset"
          type="button"
          onClick={() => scrollToPage(".App")}
        >
          <img
            className="logo"
            src="https://res.cloudinary.com/kboyle/image/upload/c_scale,w_142/v1588983133/Portfolio/logo_compressed.png"
            alt="Kevin Boyle"
            title="Back to Top"
          />
        </button>
        <div className="nav__links--right">
          <button
            className={
              elementInView === "about"
                ? "nav__link button-reset nav__link--highlighted"
                : "nav__link button-reset nav__link--reverse-highlighted"
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
                ? "nav__link button-reset nav__link--highlighted"
                : "nav__link button-reset nav__link--reverse-highlighted"
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
                ? "nav__link button-reset nav__link--highlighted"
                : "nav__link button-reset nav__link--reverse-highlighted"
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
