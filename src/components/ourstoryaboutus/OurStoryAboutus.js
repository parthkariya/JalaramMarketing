import React from "react";
import "./OurStoryAboutus.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const OurStoryAboutus = () => {
  const { t } = useTranslation();

  return (
    <div className="about-ourstory-main">
      <div className="about-ourstory-con">
        <div className="about-ourstory-part">
          <p className="about-ourstory-part-head">
            {t("about-ourstory-head-main")}
          </p>
          <p className="about-ourstory-part-subhead">
            {t("Running a")}
            <br /> {t("successful business")} <br />
            <span className="about-ourstory-subhead-digit">
              {t("since 1981")}
            </span>
          </p>
          <p className="about-ourstory-txt">
            {t("about-company-ourstory-txt-par-first")}
          </p>
          <p className="about-ourstory-subtxt">
            {t("about-company-ourstory-txt-par-sec")}
          </p>

          <p className="about-ourstory-subtxt">
            {t("about-company-ourstory-txt-par-third")}
          </p>
        </div>

        <div className="about-ourstory-part2">
          <img
            src={images.aboutourstory}
            alt=""
            className="aboutourstory-img"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStoryAboutus;
