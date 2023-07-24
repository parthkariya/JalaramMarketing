import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const FoodGradeOilInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Food Grade Oil")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.induprod6} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Food Grade Oil")}</p>
            <p className="ruberconv-part2-txt">
              {t("food-grade-oil-sng-info")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodGradeOilInfoSing;
