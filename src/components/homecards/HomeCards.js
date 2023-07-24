import React from "react";
import "./HomeCards.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const HomeCards = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="card-main">
        <div className="card-flex">
          <div className="hero-card">
            <img src={images.homecardicon1} alt="" className="hero-card-img" />
            <p className="home-card-head">{t("Professional & Expertise")}</p>
            <p className="home-card-txt">
              {t(
                "Our development and material proficiency accompany our products when they are used in any business"
              )}
            </p>
            <div className="home-card-line"></div>
            <div className="home-card-line2"></div>
          </div>

          <div className="hero-card-dark">
            <img src={images.homecardicon2} alt="" className="hero-card-img" />
            <p className="home-card-head-dark">{t("24*7 Availability")}</p>
            <p className="home-card-txt-dark">
              {t(
                "Your comfort is our priority and therefore, all services and products are always accessible"
              )}
            </p>
          </div>

          <div className="hero-card">
            <img src={images.homecardicon3} alt="" className="hero-card-img" />
            <p className="home-card-head">{t("Business Integrity")} </p>
            <p className="home-card-txt">
              {t(
                "Our Business is valued not only because of its impeccable products but due to its strong integrity"
              )}
            </p>
            <div className="home-card-last-card-line"></div>
            <div className="home-card-last-card-line2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
