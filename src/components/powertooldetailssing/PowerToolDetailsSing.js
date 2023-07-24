import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const PowerToolDetailsSing = () => {
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
                  "A power tool is a tool that is actuated by an additional power source and mechanism other than the solely manual labor used with hand tools The most common types of power tools use electric motors Internal combustion engines and compressed air are also commonly used Other power sources include steam engines, direct burning of fuels and propellants, such as in powder-actuated tools, or even natural power sources such as wind or moving water Tools directly driven by animal power are not generally considered power tools"
                )}
              </li>
              <li className="speci-list">
                {t(
                  "Power tools are used in industry, in construction, in the garden, for housework tasks such as cooking, cleaning, and around the house for purposes of driving (fasteners), drilling, cutting, shaping, sanding, grinding, routing, polishing, painting, heating and more"
                )}
              </li>
              <li className="speci-list">
                {t(
                  "Power tools are classified as either stationary or portable, where portable means hand-held  Portable power tools have obvious advantages in mobility Stationary power tools, however, often have advantages in speed and precision A typical table saw, for instance, not only cuts faster than a regular hand saw, but the cuts are smoother, straighter, and more square than what is normally achievable with a hand-held power saw Some stationary power tools can produce objects that cannot be made in any other way Lathes, for example, produce truly round objects"
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
                  <p>Material</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Range</p>
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

export default PowerToolDetailsSing;
