import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const PVCLeftFlatHoseDetailsSing = () => {
  const [specification, setSpecification] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [applicaton, setApplication] = useState(false);
  const { t } = useTranslation();

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
                  "Available in Sizes 1 5 7 diameter & single layer triple layer Quality"
                )}
              </li>
              <li className="speci-list">
                {t(
                  "More than 15 Quality grades available in virgin and semi virgin material"
                )}
              </li>
              <li className="speci-list">
                {t(
                  "Varieties from single layer, double layer or triple layer, Flexible, Durable, Easy delivery, low cost, Easy source"
                )}
              </li>
              <li className="speci-list">
                {t("Unique designs minimizes elongation and snaking")}
              </li>
              <li className="speci-list">
                {t("Durable construction helps keep your system leak free")}
              </li>
              <li className="speci-list">
                {t(
                  "Length and weight can be arranged for order more than minimum quantity"
                )}
              </li>
              <li className="speci-list">
                {t("Computerized length marking also available")}
              </li>
              <li className="speci-list">
                {t(
                  "Sizeable export orders are also entertained with quality standards"
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
                  <p>{t("Color")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("Multi-colors")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-txt">
              {t(
                "Suitable for delivery water supply or other liquid, agriculture irrigation Ideal durable hose for irrigation and drainage in the farmland and garden, cement filing, river-way sand extraction, water discharge in the construction site, road building and so on Availability"
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PVCLeftFlatHoseDetailsSing;
