import React, { Component } from "react";

import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wreaper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        promises a culinary experience beyond compare. Explore a world where
        every detail, from the exquisite flavors to impeccable service, is
        thoughtfully curated. This subheading invites you to savor the artistry
        of presentation and indulge in the sophisticated ambiance that defines
        upscale dining. Uncover the secrets of gastronomic excellence and let
        this key unlock a realm where each meal is a refined journey of taste
        and refinement.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
