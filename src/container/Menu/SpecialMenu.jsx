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
      <div className="app__specialMenu-menu_koffe flex__center">
        <p className="app__specialMenu-menu_heading">Koffe</p>
        <div className="app__specialMenu_menu-items">
          {data.koffe.map((koffe, index) => (
            <MenuItem key={koffe.title + index} title={koffe.title} price={koffe.price} tags={koffe.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_foods flex__center">
        <p className="app__specialMenu-menu_heading">Food</p>
        <div className="app__specialMenu_menu-items">
          {data.food.map((food, index) => (
            <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className="app__specialMenu-button">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
