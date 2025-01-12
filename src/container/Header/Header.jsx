import React, { Component } from "react";

import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wreaper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">EXPLORE THE SENSATION OF UNIQUE COFFEE</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to Your Brand, where we invite you to explore the sensation of
        unique coffee that will awaken your taste buds. Here, every cup is a
        journey into a world of distinctive and captivating flavors. With each
        sip, you'll experience the enchanting aroma of coffee and its deep, rich
        taste. From carefully selected coffee beans to precise brewing
        techniques, we deliver a coffee experience that indulges your senses.
        Let's embark on a journey together through diverse coffee flavors, from
        light and fruity to bold and aromatic.
      </p>

      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img
        src={images.header}
        alt=""
      />
    </div>
  </div>
);

export default Header;
