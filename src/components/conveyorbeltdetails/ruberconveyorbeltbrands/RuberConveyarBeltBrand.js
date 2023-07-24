import React from "react";
import "./RuberConveyarBeltBrand.css";
import images from "../../constants/images";

const RuberConveyarBeltBrand = () => {
  return (
    <div className="ruber-conv-brands-main">
      <div className="ruber-conv-brands-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">Rubber Conveyor Belt</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruber-conv-brands-flex">
          <div className="ruber-conv-brand-card"></div>

          <div className="ruber-conv-brand-card">
            <img
              src={images.brandlogo20}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuberConveyarBeltBrand;
