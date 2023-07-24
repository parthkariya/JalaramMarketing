import React from "react";
import "./AboutusFooterUp.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const AboutusFooterUp = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutus-footertop-main">
      <div className="aboutus-footertop-part">
        <h3 className="aboutus-footertop-part-head">
          {t("aboutus-footertop-part=head")}
        </h3>
        <p className="aboutus-footertop-part-txt">
          {t("aboutus-footertop-part-par-first")}
        </p>
        <p className="aboutus-footertop-part-txt">
          {t("aboutus-footertop-part-par-sec")}
        </p>
        <p className="aboutus-footertop-part-txt">
          {t("aboutus-footertop-part-par-third")}
        </p>
        <p className="aboutus-footertop-part-txt">
          {t("aboutus-footertop-part-par-fourth")}
        </p>
        <p className="aboutus-footertop-part-txt">
          {t("aboutus-footertop-part-par-fifth")}
        </p>
      </div>
      <div className="aboutus-footertop-part2">
        <img src={images.aboutusfootertop} className="aboutus-footertop-img" />
      </div>
    </div>
  );
};

export default AboutusFooterUp;
