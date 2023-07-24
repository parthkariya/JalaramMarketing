import React, { useEffect } from "react";
import "./RuberCoveyorBeltInfo.css";
import images from "../../pages/images";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const RuberConveyorBeltInfo = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // useEffect(() => {
  //   console.log("locato -=>", location.state.item);
  //   //  window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          {/* <p className="ruberconv-head">{location.state.item.name}</p> */}
          <p className="ruberconv-head">{t("Rubber Conveyor Belt")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            {/* <img
              src={location.state.item.img}
              alt=""
              className="ruberconv-img"
            /> */}
            <img src={images.homeprod1} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            {/* <p className="ruberconv-part2-head">{location.state.item.name}</p> */}
            <p className="ruberconv-part2-head">{t("Rubber Conveyor Belt")}</p>
            {/* <p className="ruberconv-part2-txt">
              {location.state.item.inarray1.des}
            </p> */}
            <p className="ruberconv-part2-txt">
              {t("ruber-conv-sing-info-trans")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuberConveyorBeltInfo;
