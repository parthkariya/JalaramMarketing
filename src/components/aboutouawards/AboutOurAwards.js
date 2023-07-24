import React from "react";
import "./AboutOurAwards.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const AboutOurAwards = () => {
  const { t } = useTranslation();

  return (
    <div className="about-award-main">
      <div className="about-award-con">
        <p className="ourproduct-main-head">
          {t("our-award-Our")}{" "}
          <span style={{ color: "#75be42", fontWeight: 600 }}>
            {t("our-award-Awards")}
          </span>
        </p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <p className="about-award-head-txt">{t("our-awardspage-head-txt")}</p>
        <div className="award-img-flex">
          <div className="award-imgbox">
            <img src={images.awardimg1} className="award-img" alt="award" />
          </div>
          <div className="award-imgbox">
            <img src={images.awardimg2} className="award-img" alt="award" />
          </div>
          <div className="award-imgbox">
            <img src={images.awardimg3} className="award-img" alt="award" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurAwards;
