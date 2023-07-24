import React from "react";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const SteamHoseInfoSing = () => {
  const { t } = useTranslation();

  return (
    <div className="ruberconv-info-main">
      <div className="ruberconv-con">
        <div className="ruberconv-max-w-head-part">
          <p className="ruberconv-head">{t("Steam Hose")}</p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="ruberconv-info-flex">
          <div className="ruberconv-info-part1">
            <img src={images.homeprod2} alt="" className="ruberconv-img" />
          </div>

          <div className="ruberconv-info-par2">
            <p className="ruberconv-part2-head">{t("Steam Hose")}</p>
            <p className="ruberconv-part2-txt">
              {t(
                "hoses made from the highest quality materials can stand up to the high temperatures and high pressures found in the steam service industry Engineered with exclusive elastomers that resist heat and flaking (popcorning), Steam hoses last longer while demonstrating extraordinary versatility and flexibility They�re clearly branded and color-coded for quick and easy identification, ordering, installation or maintenance"
              )}
            </p>
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

export default SteamHoseInfoSing;
