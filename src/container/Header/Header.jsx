import React, { Component } from "react";

import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wreaper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">JELAJAHI SENSASI KOPI YANG BERBEDA</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Selamat datang di kayffe shop, di mana kami mengundang Anda untuk menjelajahi sensasi kopi yang berbeda yang akan menggugah selera Anda. Di sini, setiap cangkir adalah sebuah perjalanan ke dunia rasa yang unik dan memikat. Dengan setiap tegukan, Anda akan merasakan aroma kopi yang memikat dan cita rasa yang mendalam. Dari biji kopi pilihan hingga teknik penyeduhan yang teliti, kami menghadirkan pengalaman kopi yang memanjakan indera Anda. Mari bersama-sama menikmati perjalanan melintasi berbagai nuansa rasa kopi, dari yang ringan dan fruity hingga yang kaya dan beraroma. 
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"  style={{ width: '100%' }}/>
    </div>
  </div>
);

export default Header;
