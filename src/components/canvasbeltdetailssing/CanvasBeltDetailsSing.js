import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const CanvasBeltDetailsSing = () => {
  const { t } = useTranslation();

  const [specification, setSpecification] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [applicaton, setApplication] = useState(false);

  const specificationn = () => {
    setApplication(false);
    setAdditionalInfo(false);
    setSpecification(true);
  };

  const additionalinfo = () => {
    setSpecification(false);
    setApplication(false);
    setAdditionalInfo(true);
  };

  const applications = () => {
    setAdditionalInfo(false);
    setSpecification(false);
    setApplication(true);
  };
  return (
    <div className="conv-details-main">
      <div className="conv-details-con">
        <div className="conv-details-head-btns">
          <button className="details-btn" onClick={() => specificationn()}>
            <BiWorld /> {t("Specification")}
          </button>
          <button className="details-btn" onClick={() => additionalinfo()}>
            <BiWorld /> {t("Additional Information")}
          </button>
          <button className="details-btn" onClick={() => applications()}>
            <BiWorld /> {t("Application")}
          </button>
        </div>

        {specification && (
          <div className="speci-main">
            <ul className="speci-lists">
              <li className="speci-list">{t("ISI standards")}</li>
              <li className="speci-list">
                {t("Available in Sizes 1? � 5? width")}
              </li>
              <li className="speci-list">
                {t(
                  "Available from 1 ply to 4 plys according to the application"
                )}
              </li>
              <li className="speci-list">{t("Water resistance property")}</li>
              <li className="speci-list">
                {t("Smooth, quiet operation and long belt life")}
              </li>
              <li className="speci-list">
                {t("Uniform belt surface with no splicing")}
              </li>
              <li className="speci-list">{t("High-tensile strength")}</li>
              <li className="speci-list">
                {t("High coefficient of friction")}
              </li>
              <li className="speci-list">{t("Lightweight")}</li>
              <li className="speci-list">{t("No lubrication necessary")}</li>
              <li className="speci-list">{t("Transverse rigidity")}</li>
            </ul>
          </div>
        )}

        {additionalInfo && (
          <div className="additionalinfo-main">
            <div className="additionalinfo-main">
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Material")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("Rubber, Cords, Fabric")}</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Color")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("Multi color")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-list">
              {t(
                "Most commonly used for farming, mining, and logging applications, such as bucksaws, sawmills, threshers, silo blowers, conveyors for filling corn cribs or haylofts, balers, water pumps (for wells, mines, or swampy farm fields), and electrical generators"
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CanvasBeltDetailsSing;
