import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="mamamamamamamammamaamammamaamm" />
      <h1 className="headtext__cormorant">Today's special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu_menu-wine_cocktails flex__center">
        <p className="app__specialMenu_menu-heading">Koffe</p>
        <div className="app__specialMenu_menu-items">
          {data.koffe.map((koffe, index) => (
            <MenuItem key={koffe.title + index} price={koffe.price} tags={koffe.tags}/>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu_menu-wine_cocktails flex__center">
        <p className="app__specialMenu_menu-heading">Koffe</p>
        <div className="app__specialMenu_menu-items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} price={cocktails.price} tags={cocktails.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>

    </div>
  </div>
);

export default SpecialMenu;
