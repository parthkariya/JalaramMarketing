import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const SandBlastHostInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Sandblast Hose")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.airprod2} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Sandblast Hose")}</p>
            <p className="ruberconv-part2-txt">{t("hydralic-oil-sing-info")}</p>
            <ul>
              <li className="speci-list">
                {t(
                  "Transfer of steam for processing products & cleaning equipment"
                )}
              </li>
              <li className="speci-list">{t("Hydrocarbon drain service")}</li>
              <li className="speci-list">{t("Heat Resisting Patrex")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandBlastHostInfoSing;
