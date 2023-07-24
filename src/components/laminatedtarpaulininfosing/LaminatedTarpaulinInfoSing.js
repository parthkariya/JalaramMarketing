import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const LaminatedTarpaulinInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Laminated Tarpaulin")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.tarpaulinprod2} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Laminated Tarpaulin")}</p>
            <p className="ruberconv-part2-txt">
              {t(
                "CROSS LAMINATED TARPAULIN is an innovative complete protection, all weather cover made from multi layered cross cut film, fused together giving it maximum strength and high durability The film consists of speciality grades of polymer and added UV stabiliser giving it the best desired properties required to withstand extreme rain, heat and sunlight"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaminatedTarpaulinInfoSing;
