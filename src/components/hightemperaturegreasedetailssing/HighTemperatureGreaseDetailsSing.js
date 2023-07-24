import React, { useState, useTransition } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const HighTemperatureGreaseDetailsSing = () => {
  const [specification, setSpecification] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [applicaton, setApplication] = useState(false);

  const specificationn = () => {
    setApplication(false);
    setAdditionalInfo(true);
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

  const { t } = useTranslation();

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
                {
                  "Food-grade lubricants must perform the same technical functions as any other lubricant: provide protection against wear, friction, corrosion and oxidation, dissipate heat and transfer power, be compatible with rubber and other sealing materials, as well as provide a sealing effect in some cases"
                }
              </li>
            </ul>
          </div>
        )}

        {additionalInfo && (
          <div className="additionalinfo-main">
            <div className="additionalinfo-main">
              {/* <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>Material</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Neoprene Rubber, Nylon Cords</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>Color</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Black colour only</p>
                </div>
              </div> */}
            </div>
          </div>
        )}
        {applicaton && <></>}
      </div>
    </div>
  );
};

export default HighTemperatureGreaseDetailsSing;
