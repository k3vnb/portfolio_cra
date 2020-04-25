import React, { useState } from "react";
import "./Nav.css"

const Nav = () => {

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
          <div className="nav-link-topbar">
            <img
              className="self-portrait"
              src="https://res.cloudinary.com/kboyle/image/upload/v1587593766/Portfolio/logo.png"
              alt="Kevin Boyle"
              title="Back to Top"
            />
          </div>
        </div>
        <div className="nav-links-right">
          <div
            className="nav-link-topbar"
            // className={
            //   this.state.aboutLinkIsUnderlined
            //     ? "nav-link-topbar nav-link-underline"
            //     : "nav-link-topbar nav-link-reverse-underline"
            // }
            title="go to about section"
            // onClick={() => scrollToPage(".about-container")}
          >
            About
          </div>
          <div
            className="nav-link-topbar"
            // className={
            //   this.state.galleryLinkIsUnderlined
            //     ? "nav-link-topbar nav-link-underline"
            //     : "nav-link-topbar nav-link-reverse-underline"
            // }
            title="go to gallery section"
            // onClick={() => scrollToPage(".gallery-container")}
          >
            Projects
          </div>
          <div
            className="nav-link-topbar"
            // className={
            //   this.state.contactLinkIsUnderlined
            //     ? "nav-link-topbar nav-link-underline"
            //     : "nav-link-topbar nav-link-reverse-underline"
            // }
            title="go to contact section"
            // onClick={() => scrollToPage(".contact-container")}
          >
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
