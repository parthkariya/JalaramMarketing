import React from "react";
import PageHero from "../PageHero";
import images from "../../pages/images";

const SolutionHero = () => {
  return (
    <div className="about-heromain">
      <img src={images.aboutheroimg} className="abouthero-img" />
      <div className="abouthero-inner">
        <div className="abouthero-inner-con">
          <h3 className="abouthero-head">Solutions</h3>
          <PageHero title="Solution" />
        </div>
      </div>
    </div>
  );
};

export default SolutionHero;
