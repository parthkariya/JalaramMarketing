import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const ElevatorBeltInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Elevator belt")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.flatbeltprod3} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Elevator belt")}</p>
            <p className="ruberconv-part2-txt">
              {t(
                "Flat belts are used in line shafting to transmit power in factories The flat belt is a simple system of power transmission It delivers high power for high speeds (500 hp for 10,000 ft/min), in cases of wide belts and large pulleys Various carcass materials are available for Multiple Ply belts, depending on the application The most highly recommended are polyester/nylon, cotton, nylon, polyester, etc These belts can be supplied with rubber covers, friction surface, or bareback"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorBeltInfoSing;
