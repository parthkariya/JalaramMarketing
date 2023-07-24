import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const EngineOilDetailsSing = () => {
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
            <div className="additionalinfo-main"></div>
          </div>
        )}
        {applicaton && <></>}
      </div>
    </div>
  );
};

export default EngineOilDetailsSing;
