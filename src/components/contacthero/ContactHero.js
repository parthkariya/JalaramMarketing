import React from "react";
import images from "../../pages/images";
import PageHero from "../PageHero";

const ContactHero = () => {
  return (
    <div className="about-heromain">
      <img src={images.aboutheroimg} className="abouthero-img" />
      <div className="abouthero-inner">
        <div className="abouthero-inner-con">
          <h3 className="abouthero-head">Contact Us</h3>
          <PageHero title="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
