import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const PUConveyorBeltBrandSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruber-conv-brands-main">
      <div className="ruber-conv-brands-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">
            {t("Cotton Belt / Canvas Belt Brand")}
          </p>
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
              src={images.brandlogo22}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>

          <div className="ruber-conv-brand-card">
            <img
              src={images.brandlogo19}
              alt=""
              className="ruber-conv-brand-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUConveyorBeltBrandSing;
