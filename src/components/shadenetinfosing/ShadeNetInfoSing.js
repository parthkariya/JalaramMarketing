import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const ShadeNetInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Shade Net")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.tarpaulinprod3} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Shade Net")}</p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "Agro Shade Nets are used in agricultural areas for a variety of applications as well as construction industries"
              )}
            </p>
            <ul>
              <li className="ruberconv-part2-txt">
                {t("Width 3Mtr Width, 5Mtr Width, 6Mtr Width")}
              </li>
              <li className="ruberconv-part2-txt">
                {t("Ratio 50% Shade, 75% Shade, 90% Shade")}
              </li>
              <li className="ruberconv-part2-txt">
                {t("Gauge 6Gauge, 9 Gauge")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadeNetInfoSing;
