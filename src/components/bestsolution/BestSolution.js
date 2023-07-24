import React from "react";
import "./BestSolution.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const BestSolution = () => {
  const { t } = useTranslation();
  return (
    <div className="bestsolu-main">
      <img src={images.bestsolutionbg} className="bestsolution-bg" alt="" />
      <div className="bestsolution-inner">
        <div className="bestsolution-flex">
          <div className="bestsolution-mx-700">
            <p className="ourproduct-main-head clr-white">
              {t("best-solution-Best")}{" "}
              <span style={{ color: "#75be42", fontWeight: 600 }}>
                {t("best-solution-Solutions")}
              </span>
            </p>
            <div className="heading-linebox">
              <div className="heading-line"></div>
              <img src={images.leaf_icon} alt="" className="leaf-icon" />
              <div className="heading-line"></div>
            </div>
            <p className="heading-txt-line clr-white">
              {t("best-solution-head-txt")}
            </p>
          </div>
          <div className="bestsolu-txtbox">
            <p className="bestsolu-txt">{t("best-solution-txt-par-first")}</p>
            <p className="bestsolu-txt">{t("best-solution-txt-par-sec")}</p>
            <p className="bestsolu-txt">{t("best-solution-txt-par-third")}</p>
            <p className="bestsolu-txt">{t("best-solution-txt-par-fourth")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSolution;
