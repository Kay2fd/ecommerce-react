import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
        Your Address, 79579
        </p>
        <p className="p__opensans">081234675</p>
        <p className="p__opensans">081287675</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">
          "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet"
        </p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Opening Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 12:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Kayana All Right reserved</p>
    </div>
  </div>
);

export default Footer;
