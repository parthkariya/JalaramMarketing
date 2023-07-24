import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const PolyVBeltDetailsSing = () => {
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
              <li className="speci-list">{t("According to DIN 7867")}</li>
              <li className="speci-list">
                {t("Conditionally resistant to oil")}
              </li>
              <li className="speci-list">
                {t("Temperature range from -30C to +80C")}
              </li>
              <li className="speci-list">
                {t("Electrically conductive to ISO 1813")}
              </li>
              <li className="speci-list">
                {t("Suitable for tropical climates")}
              </li>
              <li className="speci-list">
                {t("Suitable for counterbendings")}
              </li>
              <li className="speci-list">{t("Reduced noise level")}</li>
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
                  <p>{t("Neoprene Rubber, Nylon Cords")}</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Color")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("Black colour only")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="application-txt   ">
              {t(
                " Driving Generators, Fans, Water Pumps, A/C Compressors, CNC Machines, Washing Machine and Power Steering etc"
              )}
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PolyVBeltDetailsSing;
