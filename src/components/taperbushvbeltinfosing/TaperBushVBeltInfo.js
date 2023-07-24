import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const TaperBushVBeltInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Taper bush v Belt Pulley")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.homeprod3} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">
              {t("Taper bush v Belt Pulley")}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "Poly-V is a multi rib belt drive whose special construction allows it to be used with very small pulley diameters, reducing noise and vibrations It solves many drive problems in a number of applications such as machine tools, wood working machines, fitnessmachines, compressors, fans etc SIT pulleys have been designed to guarantee optimal drive performances and life High ratio or high torque drivers With only 1 belt, tensioning is easy and you do not have to worry about matching belts"
              )}
            </p>
            <ul className="speci-lists">
              <li className="speci-list">
                {t("Power Transmission in machineries")}
              </li>
              <li className="speci-list">{t("Durable")}</li>
              <li className="speci-list">
                {t("Resistant to high wear and tear")}
              </li>
              <li className="speci-list">{t("Dimensionally accurate")}</li>
              <li className="speci-list">{t("Anti abrasive")}</li>
              <li className="speci-list">{t("Non corrosive")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaperBushVBeltInfo;
