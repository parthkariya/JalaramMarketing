import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const PVCGardenHoseInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("PVC Garden Hose")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.agriprod3} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("PVC Garden Hose")}</p>
            <p className="ruberconv-part2-txt" style={{ marginBottom: "20px" }}>
              {t(
                "Garden hoses are typically made of synthetic rubber or soft plastic, reinforced with an internal web of fibers As a result of these materials, garden hoses are flexible and their smooth exterior facilitates pulling them past trees, posts and other obstacles Garden hoses are also generally tough enough to survive scraping on rocks and being stepped on without damage or leaking"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PVCGardenHoseInfoSing;
