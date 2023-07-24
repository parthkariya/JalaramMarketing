import React from "react";
import PageHero from "../PageHero";
import images from "../../pages/images";

const OurStrengthHero = () => {
  return (
    <div className="about-heromain">
      <img src={images.aboutheroimg} className="abouthero-img" />
      <div className="abouthero-inner">
        <div className="abouthero-inner-con">
          <h3 className="abouthero-head">Our Strength</h3>
          <PageHero title="Our Strength" />
        </div>
      </div>
    </div>
  );
};

export default OurStrengthHero;
