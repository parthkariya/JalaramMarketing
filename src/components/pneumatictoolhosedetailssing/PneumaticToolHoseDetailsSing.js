import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const PneumaticToolHoseDetailsSing = () => {
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
            <ul className="speci-lists"></ul>
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
                  <p>{t("Plasticized PVC, Black")}</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Cover")} </p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("Thermo-compound, Black colour")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-list">
              {t(
                "Specially designed for various industrial machinery, under ground application, civil construction and others Such as watering, airline connection, road building, pneumatic tools, etc"
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PneumaticToolHoseDetailsSing;
