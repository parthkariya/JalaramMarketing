import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";

const PVCGardenHoseDetailsSing = () => {
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
              <li className="speci-list">Available in 0.5? � 1.5? diameter</li>
              <li className="speci-list">
                Cable hose, Semi cable hose, Virgin hose, Petrol hose, Semi
                virgin hose, Braided hose and many more quality available
              </li>
              <li className="speci-list">
                No weather effect because hoses are made oil free
              </li>
              <li className="speci-list">
                Being light, colorful, flexible and with the excellent
                resistance to weather condition these hoses are the ideal
                matched product of garden irrigation.
              </li>
              <li className="speci-list">Adjustable and Anti Corrosive</li>
              <li className="speci-list">
                Being widely used for Industrial and domestic irrigation and
                washing in the parks, communities, factories and families,
                gardening, and crop seeding.
              </li>
            </ul>
          </div>
        )}

        {additionalInfo && (
          <div className="additionalinfo-main">
            <div className="additionalinfo-main">
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>Material </p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Plastic, PVC</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>Color</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>Multi-colors</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && (
          <>
            <p className="speci-txt">
              Being widely used for Industrial and domestic irrigation and
              washing in the parks, communities, factories and families,
              gardening, and crop seeding.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PVCGardenHoseDetailsSing;
