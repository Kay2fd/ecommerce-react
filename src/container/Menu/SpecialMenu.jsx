import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu" />
      <h1 className="headtext__cormorant">Today's special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_koffe flex__center">
        <p className="app__specialMenu-menu_heading">Coffee</p>
        <div className="app__specialMenu_menu-items">
          {data.coffees.map((coffees, index) => (
            <MenuItem key={coffees.title + index} title={coffees.title} price={coffees.price} tags={coffees.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_foods flex__center">
        <p className="app__specialMenu-menu_heading">Food</p>
        <div className="app__specialMenu_menu-items">
          {data.foods.map((foods, index) => (
            <MenuItem key={foods.title + index} title={foods.title} price={foods.price} tags={foods.tags} />
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
