import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const PondLinerInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Pond Liners")} </p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.tarpaulinprod4} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Pond Liners")}</p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "A pond liner is an impermeable geomembrane used for retention of liquids, including the lining of reservoirs, retention basins, hazardous and nonhazardous surface impoundments,garden ponds and artificial streams in parks and gardens"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PondLinerInfoSing;
