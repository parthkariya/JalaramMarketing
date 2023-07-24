import React from "react";
import images from "../../pages/images";
import PageHero from "../PageHero";

const BusiInqHero = () => {
  return (
    <div className="about-heromain">
      <img src={images.aboutheroimg} className="abouthero-img" />
      <div className="abouthero-inner">
        <div className="abouthero-inner-con">
          <h3 className="abouthero-head">Business Inquery</h3>
          <PageHero title="Business Inquery" />
        </div>
      </div>
    </div>
  );
};

export default BusiInqHero;
