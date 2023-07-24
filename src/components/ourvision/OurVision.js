import React from "react";
import "./OurVision.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const OurVision = () => {
  const { t } = useTranslation();

  return (
    <div className="ourvision-main">
      <div className="ourvision-part1">
        <div className="ourvision-imgbox">
          <img src={images.ourvision} alt="" className="ourvision-img" />
        </div>
      </div>
      <div className="ourvision-part2">
        <p className="ourvision-head">
          {t("ourvision-heading-Our")} <br />
          <span style={{ fontWeight: 600 }}>
            {t("ourvision-heading-Vision")}
          </span>
        </p>
        <p className="ourvision-txt">{t("ourvision-txt-trans")}</p>
      </div>
    </div>
  );
};

export default OurVision;
