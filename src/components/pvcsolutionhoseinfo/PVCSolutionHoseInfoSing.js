import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const PVCSolutionHoseInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("PVC suction hose")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.agriprod2} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("PVC suction hose")}</p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "Medium-duty, lightweight construction; retains flexibility in cold weather Smooth-bore tube minimizes material buildup and resists a variety of chemicals found in agricultural and sanitary industries Slightly corrugated outer helix promotes abrasion resistance, low coefficient of friction and ease of coupling Suitable for applications where low-temperature flexibility is required"
              )}
            </p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "Special category transparent suction hose used for feeding tube of ORNI MACHINE used for crop seeding Available in 1 to 1 5 with quality variant according to customers requirements"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PVCSolutionHoseInfoSing;
