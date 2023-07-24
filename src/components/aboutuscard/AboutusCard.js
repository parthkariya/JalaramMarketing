import React from "react";
import "./AboutusCard.css";
import images from "../../pages/images";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const AboutusCard = () => {
  const { t } = useTranslation();
  return (
    <div className="aboutuscard-main">
      <div className="aboutuscard-con">
        <div className="aboutuscard">
          <img src={images.aboutuscardicon1} className="aboutus-card-icon" />
          {/* <p className="aboutuscard-digit">8133</p> */}
          <CountUp
            className="aboutuscard-digit"
            start={0}
            end={8133}
            duration={2.75}
          />
          <p className="aboutuscard-txt">{t("SHOWROOM SQ FT")}</p>
        </div>

        <div className="aboutuscard">
          <img src={images.aboutuscardicon2} className="aboutus-card-icon" />
          {/* <p className="aboutuscard-digit">101667</p> */}
          <CountUp
            className="aboutuscard-digit"
            start={0}
            end={101667}
            duration={2.75}
          />
          <p className="aboutuscard-txt">{t("WAREHOUSE SQ FT")}</p>
        </div>

        <div className="aboutuscard">
          <img src={images.aboutuscardicon1} className="aboutus-card-icon" />
          {/* <p className="aboutuscard-digit">4829</p> */}
          <CountUp
            className="aboutuscard-digit"
            start={0}
            end={4829}
            duration={2.75}
          />
          <p className="aboutuscard-txt">{t("DEALERS")}</p>
        </div>

        <div className="aboutuscard">
          <img src={images.aboutuscardicon4} className="aboutus-card-icon" />
          {/* <p className="aboutuscard-digit">305</p> */}
          <CountUp
            className="aboutuscard-digit"
            start={0}
            end={305}
            duration={2.75}
          />
          <p className="aboutuscard-txt">{t("TURNOVER IN MILLION")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutusCard;
