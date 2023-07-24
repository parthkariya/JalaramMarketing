import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const PUConveyorBeltInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Pvc / PU Conveyor Belt")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.conveprod4} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">
              {t("Pvc / PU Conveyor Belt")}
            </p>
            <p className="ruberconv-part2-txt">
              {t(
                "We are offering a wide array of pu conveyor belt We offer these belts in wide-range of sizes to provide the various requirements of our customers in an efficient manner Offered belts are manufactured by the use of premium quality materials which we procure from the trustworthy vendors of the industry In addition to this, these belts can be availed at market leading rates"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUConveyorBeltInfoSing;
