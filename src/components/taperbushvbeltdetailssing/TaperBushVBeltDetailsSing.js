import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const TaperBushVBeltDetailsSing = () => {
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
              <li className="speci-list">
                {t(
                  "We also have the capability to offer pulleys with Taper Lock Bush & QD bush arrangement"
                )}
              </li>
              <li className="speci-list">
                {t("We can also supply as per customer requirement")}
              </li>
              <li className="speci-list">
                {t(
                  "Pulley is available with the possible speed ratio of 40 to 1"
                )}
              </li>
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
                  <p>{t("Aluminium and Cast Iron")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-list">
              {t(
                "These pulleys are widely used to cater to the needs of different industries and sectors like textile, cement, sugar, fertilizer, paper and ceramic, among others"
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default TaperBushVBeltDetailsSing;
