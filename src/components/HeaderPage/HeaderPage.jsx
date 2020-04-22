import React from "react";
import Header from "../Header/Header";
import "./HeaderPage.css";

const HeaderPage = () => (
  <div className="header-and-nav">
    <div className="background-img-tiles full" />
    <div className="wallpaper full">
      <div className="background-img full" />
      <div className="header-overlay full">
        <Header />
      </div>
    </div>
  </div>
);

export default HeaderPage;
