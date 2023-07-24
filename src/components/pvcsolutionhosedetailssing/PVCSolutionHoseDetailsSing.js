import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";

const PVCSolutionHoseDetailsSing = () => {
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
            <ul className="speci-lists">
              <li className="speci-list">
                Available in 0.75? to 6? diameter and blue color
              </li>
              <li className="speci-list">
                Computerized meter marking available
              </li>
              <li className="speci-list">
                Export based packaging for each bundle
              </li>
              <li className="speci-list">
                Tensile strength and durability is 70% more than commercial
                grade
              </li>
              <li className="speci-list">
                Oil free hose production and weather resistant
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
                  <p>Plastic Granule, Resin</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>Color</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Blue, Black,Green,Grey,Pink</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-txt">
              Delivery and light suction of water. Conveyance of waste, sludge,
              slurry, chemicals and other waste matter. Delivery of saline
              water, light acids alkaline and other chemicals exception solvents
              Suitable for the horticultural and marine industries. Also uses as
              portal water supply.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PVCSolutionHoseDetailsSing;
