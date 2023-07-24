import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const AirWaterHoseSecInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Air Water hose")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.airprod4} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Air Water hose")}</p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "air and multipurpose hoses are engineered to meet the specific requirements and industry specifications for a variety of applications Featuring low working pressures, large bore sizes and high transfer capabilities, our well-rounded selection of industrial hoses serves a range of markets from high-pressure use in heavy construction, to light-duty in agricultural and some industrial equipment"
              )}
            </p>

            <ul>
              <li className="speci-list">{t("Safer operation")}</li>
              <li className="speci-list">{t("Longer hose life")}</li>
              <li className="speci-list">
                {t("Full range of sizes and styles")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirWaterHoseSecInfoSing;
