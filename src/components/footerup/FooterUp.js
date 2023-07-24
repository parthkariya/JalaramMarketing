import React from "react";
import "./FooterUp.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";
const FooterUp = () => {
  const { t } = useTranslation();
  return (
    <div className="footerup-main">
      <img src={images.footerupbg} alt="" className="footerup-bg" />
      <div className="footerup-headbox-main">
        <div className="footerup-headbox">
          <p className="footerup-headbox-txt">
            {t("Jalaram Marketing Products")}
          </p>
          <p className="footerup-headbox-subtxt">
            {t("Best Branded Products at Cost-effective prices")}
          </p>
        </div>
      </div>
      <div className="footerup-inner">
        <div className="footerup-inner-flex">
          <p className="footerup-txt">{t("footerup_txt")}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;
