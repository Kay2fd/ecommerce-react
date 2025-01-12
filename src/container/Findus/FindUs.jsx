import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet</p>
        <p className="p__opensans" style={{color:'#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Monday-Friday: 10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday: 10:00 am - 12:00 pm</p>
        <button className="custom__button" style={{marginTop:'2rem'}}>Visit Us</button>
      </div>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
    </div>
  </div>
);

export default FindUs;
