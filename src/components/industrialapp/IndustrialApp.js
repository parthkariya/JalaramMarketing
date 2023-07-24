import React, { useState } from "react";
import "./IndustrialApp.css";
import images from "../../pages/images";
import data from "../../constants/data";
import { useTranslation } from "react-i18next";

const IndustrialApp = () => {
  const { t } = useTranslation();
  const [induCard, setInduCard] = useState(data.induApp);
  return (
    <div className="induapp-main">
      <div className="induapp-con">
        <p className="ourproduct-main-head">
          {t("Industrial")}
          <span style={{ color: "#75be42", fontWeight: 600 }}>
            {t("Applications")}
          </span>
        </p>
        <div className="heading-linebox">
          <div className="heading-line"></div>
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>

        <p className="about-award-head-txt mx-700">{t("induapp-head-txt")}</p>

        <div className="induapp-cards-main">
          {/* {induCard.map((item) => {
            return (
              <div className="induapp-card-main">
                <img src={item.imageUrl} alt="" className="induapp-img" />
                <div className="induapp-card-bgclr">
                  <div className="induapp-txtbox ">
                    <p className="induapp-txt">{item.name}</p>
                  </div>
                </div>
              </div>
            );
          })} */}

          <div className="induapp-card-main">
            <img src={images.induappimgcard1} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Wind Energy")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard2} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Textile")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard3} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Ports")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard4} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Petroleum Gas")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard5} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Mining")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard6} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Logistics Packaging")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard7} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">
                  {t("Industrial Production Automation")}
                </p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard8} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Food Processing")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard9} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Chemical Pharmaceutical")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard10} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Automobile Tyre")}</p>
              </div>
            </div>
          </div>

          <div className="induapp-card-main">
            <img src={images.induappimgcard11} alt="" className="induapp-img" />
            <div className="induapp-card-bgclr">
              <div className="induapp-txtbox ">
                <p className="induapp-txt">{t("Agriculture Farming")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialApp;
