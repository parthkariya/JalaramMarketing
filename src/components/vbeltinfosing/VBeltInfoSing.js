import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const VBeltInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("VBelt")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.homeprod6} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("VBelt")}</p>
            <p className="ruberconv-part2-txt">{t("vbelt-sing-info-sec")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VBeltInfoSing;
