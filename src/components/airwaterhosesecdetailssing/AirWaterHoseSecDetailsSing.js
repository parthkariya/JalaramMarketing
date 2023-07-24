import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";

const AirWaterHoseSecDetailsSing = () => {
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
            <BiWorld /> Specification
          </button>
          <button className="details-btn" onClick={() => additionalinfo()}>
            <BiWorld /> Additional Information
          </button>
          <button className="details-btn" onClick={() => applications()}>
            <BiWorld /> Application
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
                  <p>Color</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Black or red Pyrosyn, Pin-pricked synthetic rubber</p>
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

export default AirWaterHoseSecDetailsSing;
