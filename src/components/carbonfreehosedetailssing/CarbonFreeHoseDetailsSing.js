import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const CarbonFreeHoseDetailsSing = () => {
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
                  "sed in conveying Furnace Coolant, carrying Power Cables in Steel mills, Glass Industry and for other Non-Conductive Applications"
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
                  <p>{t("Black")}</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Cover")}</p>
                </div>
                <div
                  className="additionalinfo-part-line"
                  style={{ height: "100px" }}
                ></div>
                <div className="additionalinfo-part2">
                  <p>
                    {t(
                      "Smooth Fabric marked Green Synthetic Rubber, Heat, Weather & Abrasion Resistant Glass fiber cover c"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && <></>}
      </div>
    </div>
  );
};

export default CarbonFreeHoseDetailsSing;
