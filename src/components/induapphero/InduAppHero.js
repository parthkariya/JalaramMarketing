import React from "react";
import "./InduAppHero.css";
import images from "../../pages/images";
import PageHero from "../PageHero";
const InduAppHero = () => {
  return (
    <div className="about-heromain">
      <img src={images.aboutheroimg} className="abouthero-img" />
      <div className="abouthero-inner">
        <div className="abouthero-inner-con">
          <h3 className="abouthero-head"> Industrial & Applications</h3>
          <PageHero title=" Industrial & Applications" />
        </div>
      </div>
    </div>
  );
};

export default InduAppHero;
