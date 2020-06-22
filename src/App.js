import React, { useState, useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AppContext from "./AppContext";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [aboutOffsetTop, setAboutOffsetTop] = useState(null);
  const [projectsOffsetTop, setProjectsOffsetTop] = useState(null);
  const [contactOffsetTop, setContactOffsetTop] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

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

  useEffect(() => {
    const handleLoad = () => setLoadingState(false);
    window.addEventListener("load", handleLoad);
    // eslint-disable-next-line no-console
    console.log(
      "%c Thanks for checking out out my code. You can find the repository for this page at https://www.github.com/lemurriot/portfolio_cra",
      'color: orange; font-weight: bold; font-size: 18px; font-family: "Courier New", Courier, monospace;'
    );
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const contextVal = {
    appScrollTop: scrollTop,
    aboutOffsetTop,
    projectsOffsetTop,
    contactOffsetTop,
    setOffsetTop,
  };

  return (
    <AppContext.Provider value={contextVal}>
      {loadingState && <LoadingSpinner />}
      <div className="App" ref={ref}>
        <LandingPage />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
