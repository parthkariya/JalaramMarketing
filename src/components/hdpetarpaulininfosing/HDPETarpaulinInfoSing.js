import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const HDPETarpaulinInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("HDPE Tarpaulin")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div
          className="ruberconv-info-flex"
          style={{ alignItems: "flex-start" }}
        >
          <div className="ruberconv-info-part1">
            <img src={images.homeprod7} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2" style={{ gap: "10px" }}>
            <p className="ruberconv-part2-head">{t("HDPE Tarpaulin")}</p>
            <p className="ruberconv-part2-txt">
              {t(
                "Tarpaulins are made from HDPE woven fabrics laminated on both sides with LLDPE and LDPE coating alongwith"
              )}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "higher grade PE material HDPE laminatic fabric and HDPE laminated tarpaulins are available in wide range of"
              )}
            </p>
            <p className="ruberconv-part2-txt">
              {t("colours (single or double color as desired by the customer)")}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "HDPE tarpaulins are used in various industries like, transportation, agriculture, infrastructure, logistics, temporary"
              )}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "shelters, household etc They are well suited for various applications like truck covers ,and also for all type of vehicles"
              )}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "funication covers, tents , canal and ponds lining, shelters, machine covers , rock and shade covers (cement, food grains,"
              )}
            </p>
            <p className="ruberconv-part2-txt">
              {t("sugar, machineries etc)")}
            </p>
            <ul>
              <li>
                {t("Cost effective, light in weight ,heavy in protection")}
              </li>
              <li>
                {t("Unaffected from microbial attacks, chemicals and alkalies")}
              </li>
              <li>{t("Durable / tear lasting and puncture resistant")}</li>
              <li>{t("Shrinkproof , easy to handle and clean")}</li>
              <li>
                {t("HRFRLS (Heat resistant, fire retardant and low smoke)")}
              </li>
              <li>
                {t("Customization facility in various colours is available")}
              </li>
            </ul>
            <ul>
              <li>9*6, </li>
              <li>12*8, 12*10, 12*12,</li>
              <li>15*9, 15*12, 15*15, </li>
              <li>18*12, 18*15, </li>
              <li>20*20, </li>
              <li>21*15, 21*18, </li>
              <li>24*15, 24*18, </li>
              <li>27*15, </li>
              <li>30*18, 33*18, 36*18, 36*24, </li>
              <li>40*24</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HDPETarpaulinInfoSing;
