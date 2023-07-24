import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const PVCLeftFlatHoseInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">
            {t("PVC Left Flat Hose / Kisan Pipe")}
          </p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.homeprod8} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">
              {t("PVC Left Flat Hose / Kisan Pipe")}
            </p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "PVC Layflat hose is a tough water discharge hoses made with a PVC cover and/or reinforced polyester yarn The high tensile polyester yarn provides great durability and strength in all working situations Jalaram PVC layflat hose is highly durable while maintaining great flexibility and best suited for low  medium pressure applications"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PVCLeftFlatHoseInfo;
