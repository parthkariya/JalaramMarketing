import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const ElevatorBeltDetailsSing = () => {
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
              <li className="speci-list">{t("SI standards")}</li>
              <li className="speci-list">
                {t("Available in Sizes 5 12 width & 5-10 ply combination")}
              </li>
              <li className="speci-list">
                {t("Superior quality also available for heavy industries")}
              </li>
              <li className="speci-list">
                {t(
                  "Canvas based material made with high strength polyester nylon threads for higher durability"
                )}
              </li>
              <li className="speci-list">
                {t("Rapplon� High Performance Flat Belts")}
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
                "Used as Bucket Elevator in various industries such as Cement Plant, Cotton Ginning, Plastic, Ceramic etc"
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ElevatorBeltDetailsSing;
