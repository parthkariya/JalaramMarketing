import React from "react";
import "./OurValues.css";
import images from "../../pages/images";
import { BsTruck, BsFuelPump, BsBuildings } from "react-icons/bs";
import { GiCargoCrane } from "react-icons/gi";
import { MdConveyorBelt } from "react-icons/md";
import { useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation();

  return (
    <div className="ourvalues-main">
      <div className="ourvalues-con">
        <div className="mx-700">
          <p className="ourproduct-main-head">
            {t("ourvalues-heading-Our")}
            <span style={{ color: "#75be42", fontWeight: 600 }}>
              {t("ourvalues-heading-Values")}
            </span>
          </p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
          <p className="heading-txt-line">{t("ourvalues-head-txt")}</p>
        </div>
        <doiv className="ourvalues-card-flex">
          <div className="ourvalues-card">
            <div className="ourvalues-card-icon-flex">
              <GiCargoCrane className="ourvalues-icon" />
              <p className="ourvalues-digit">01</p>
            </div>
            <p className="ourvalues-card-head">{t("Integrity")}</p>
            <p className="ourvalues-card-txt">
              {t("ourvalues-card-txt-first")}
            </p>
          </div>
          <div className="ourvalues-card">
            <div className="ourvalues-card-icon-flex">
              <BsBuildings className="ourvalues-icon" />
              <p className="ourvalues-digit">02</p>
            </div>
            <p className="ourvalues-card-head">{t("Customer Satisfaction")}</p>
            <p className="ourvalues-card-txt">{t("ourvalues-card-txt-sec")}</p>
          </div>
          <div className="ourvalues-card">
            <div className="ourvalues-card-icon-flex">
              <BsFuelPump className="ourvalues-icon" />
              <p className="ourvalues-digit">03</p>
            </div>
            <p className="ourvalues-card-head">{t("Quality")}</p>
            <p className="ourvalues-card-txt">
              {t("ourvalues-card-txt-third")}
            </p>
          </div>
          <div className="ourvalues-card ourvalues-card-long">
            <div className="ourvalues-card-icon-flex">
              <BsTruck className="ourvalues-icon" />
              <p className="ourvalues-digit">04</p>
            </div>
            <p className="ourvalues-card-head">{t("People Teamwork")}</p>
            <p className="ourvalues-card-txt">
              {t("ourvalues-card-txt-fourth")}
            </p>
          </div>

          <div className="ourvalues-card ourvalues-card-long">
            <div className="ourvalues-card-icon-flex">
              <MdConveyorBelt className="ourvalues-icon" />
              <p className="ourvalues-digit">05</p>
            </div>
            <p className="ourvalues-card-head">{t("Partnering")}</p>
            <p className="ourvalues-card-txt">
              {t("ourvalues-card-txt-fifth")}
            </p>
          </div>
        </doiv>
      </div>
    </div>
  );
};

export default OurValues;
