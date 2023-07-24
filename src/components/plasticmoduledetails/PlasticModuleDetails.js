import React from "react";
import "./PlasticModuleDetails.css";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const PlasticModuleDetails = () => {
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
              <li className="speci-list">{t("Heavy duty construction")}</li>
              <li className="speci-list">{t("Drift free design")}</li>
              <li className="speci-list">{t("Easy to install")}</li>
              <li className="speci-list">
                {t("Most Power saving design, UNI M-QNB Blue, 8 mm Thickness,")}
              </li>
              <li className="speci-list">
                {t("Ammeraal Beltech ,Top Smooth, Poy-Proplene")}
              </li>
              <li className="speci-list">{t("Edge Cut/Moulded Edge")}</li>

              <li className="speci-list">
                {t("Splicing Method Hot/ Cold/ Mechanical")}
              </li>
            </ul>
          </div>
        )}

        {additionalInfo && (
          <div className="additionalinfo-main">
            <div className="additionalinfo-main">
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Color")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("White,Blue,Red,Green")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-list" style={{ marginTop: "20px" }}>
              {t(
                "Auto parts, Sorting, Separating Plastic, Metals, Inspection, Assembly lines, Manufacturing, Distribution, Warehouse"
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PlasticModuleDetails;
