import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const TimmingPulleyVBeltInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Timing / Pulley v Belt Pulley")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.pulleyprod2} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">
              {t("Timing / Pulley v Belt Pulley")}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "Positive grip of belt teeth with pulley tooth eliminate slippage and speed variation Drive provides wide load capacity from sub fractional horsepower to 600HP"
              )}
            </p>
            <ul className="speci-lists">
              <li className="speci-list">
                {t(
                  "Drive ranges is from 10RPM to 10,000 RPM, between two spindles and multi-spindle drive system"
                )}
              </li>
              <li className="speci-list">
                {t(
                  "Suitable for all type of power transmission, indexing, positioning, conveying systems multi-shaft drive because of high accuracy drive"
                )}
              </li>
              <li className="speci-list">
                {t(
                  "Reversing drive is possible with double sided tooth belts, known as twin-powder and belt, also Running serpentine drives"
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimmingPulleyVBeltInfoSing;
