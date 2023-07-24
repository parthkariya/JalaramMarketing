import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const ShadeNetDetailsSing = () => {
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
            <ul className="speci-lists"></ul>
          </div>
        )}

        {additionalInfo && (
          <div className="additionalinfo-main">
            <div className="additionalinfo-main">
              {/* <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>Color</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Blue ,Green ,White, Yellow</p>
                </div>
              </div> */}
            </div>
          </div>
        )}
        {applicaton && (
          <>
            {/* <p className="speci-list">Cement , Shipping, Steel Industry</p> */}
          </>
        )}
      </div>
    </div>
  );
};

export default ShadeNetDetailsSing;
