import React from "react";
import Header from "../Header/Header";
import "./HeaderPage.css";

const HeaderPage = () => (
  <section className="header-page">
    <div className="header-page__background-tiles full" />
    <div className="header-page__wallpaper full">
      <div className="header-page__background-img full" />
      <div className="header-page__header-overlay full">
        <Header />
      </div>
    </div>
  </section>
);

export default HeaderPage;
