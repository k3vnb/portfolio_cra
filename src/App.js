import React, { useState, useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AppContext from "./AppContext";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [aboutOffsetTop, setAboutOffsetTop] = useState(null);
  const [projectsOffsetTop, setProjectsOffsetTop] = useState(null);
  const [contactOffsetTop, setContactOffsetTop] = useState(null);

  const ref = useRef();

  const setOffsetTop = (page, offsetTop) => {
    switch (page) {
      case "about":
        return setAboutOffsetTop(offsetTop);
      case "projects":
        return setProjectsOffsetTop(offsetTop);
      case "contact":
        return setContactOffsetTop(offsetTop);
      default:
        return null;
    }
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const contextVal = {
    appScrollTop: scrollTop,
    aboutOffsetTop,
    projectsOffsetTop,
    contactOffsetTop,
    setOffsetTop,
  };

  return (
    <AppContext.Provider value={contextVal}>
      <div className="App" ref={ref}>
        <LandingPage />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
