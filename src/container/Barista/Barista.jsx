import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Barista.css";

const Barista = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.barista} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Barista" />
      <h1 className="headtext_cormorant">About Coffes</h1>

      <div className="app__barista-content">
        <div className="app__barista-content_text">
          <p className="p_opensans" style={{ color: "#AAA" }}>
            "Coffee is an art where aroma, perfection, and craftsmanship blend
            into every cup we serve with love and dedication to delight your
            palate. As baristas, we believe that every cup of coffee is a unique
            masterpiece. With each serving, we not only bring flavors to life
            but also invite you to experience the beauty behind every sip. This
            passion is what drives us and keeps us dedicated every single day."
          </p>
        </div>

        <div className="app__barista-name">
          <p>Your Name</p>
          <p className="p__opensans">Barista & Founder</p>
        </div>
      </div>
    </div>
  </div>
);

export default Barista;
