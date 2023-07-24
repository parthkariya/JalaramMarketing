import React from "react";
import "./CardDownPart.css";
import images from "../../pages/images";
import { TbBuildingFactory2 } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { RxPerson } from "react-icons/rx";
import { SlSettings } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const CardDownPart = () => {
  const { t } = useTranslation();

  return (
    <div className="carddownpart-main">
      <div className="carddown-part">
        <img src={images.carddownpart} className="carddown-img" />
      </div>
      <div className="carddown-part2">
        <h2 className="carddown-part-head">{t("carddown-part-head")}</h2>
        <p className="carddown-part-txt">{t("carddown-part-par-txt")}</p>
        <div className="carddown-part-box-flex">
          <div className="carddown-part-box">
            <div className="carddown-part-box-sub-flex">
              <TbBuildingFactory2 className="carddown-part-box-icon" />
              <div>
                <h4 className="caeddown-part-box-head">{t("Manufacturers")}</h4>
                <p className="caeddown-part-box-txt">
                  {t("carddown-manufaacturer-txt")}
                </p>
              </div>
            </div>
          </div>

          <div className="carddown-part-box">
            <div className="carddown-part-box-sub-flex">
              <SlSettings className="carddown-part-box-icon" />

              <div>
                <h4 className="caeddown-part-box-head">{t("Trades")}</h4>
                <p className="caeddown-part-box-txt">
                  {t("carddown-part-trade-txt")}
                </p>
              </div>
            </div>
          </div>

          <div className="carddown-part-box">
            <div className="carddown-part-box-sub-flex">
              <RxPerson className="carddown-part-box-icon" />
              <div>
                <h4 className="caeddown-part-box-head">{t("Exports")}</h4>
                <p className="caeddown-part-box-txt">
                  {t("carddown-part-Exports")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDownPart;
