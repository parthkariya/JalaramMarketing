import React from "react";
import "./AboutHero.css";
import images from "../../pages/images";
import PageHero from "../PageHero";

const AboutHero = ({ title, subtitle, sublink }) => {
  return (
    <div className="about-heromain">
      {/* <img src={images.aboutheroimg} className="abouthero-img" /> */}
      <div className="abouthero-inner">
        <div className="abouthero-inner-con">
          <h3 className="abouthero-head">{title}</h3>
          <PageHero title={subtitle} sublink={sublink} />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
