import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Barista.css";

const Barista = () => (
  <div className="app__bg app__wrapper section__padding">

  <div className="app__wrapper_content">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.barista} alt="" />
    </div>
  </div>
  
    <div className="app__wrapper_content img_barista">
      <div className="app__wrapper_info">
        <SubHeading title="Barista" />
        <h1 className="headtext_cormorant">Tentang Kopi</h1>

        <div className="app__barista-content">
          <div className="app__barista-content_text">
            <p className="p_opensans" style={{ color: "#AAA" }}>
              "Kopi adalah seni di mana aroma, kesempurnaan, dan keahlian
              menyatu dalam setiap cangkir yang kami sajikan dengan penuh cinta
              dan dedikasi untuk memanjakan lidah Anda. Kami, sebagai barista,
              percaya bahwa setiap cangkir kopi adalah karya seni yang unik.
              Dengan setiap sajian, kami tidak hanya menghidupkan rasa, tetapi
              juga mengundang Anda untuk merasakan keindahan di balik setiap
              tegukan, dan itulah yang membuat kami bersemangat dan berdedikasi
              setiap hari."
            </p>
          </div>

          <div className="app__barista-name">
            <p>Dika P.</p>
            <p className="p__opensans">Barista & Founder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Barista;
