import React from "react";
import "./ReplacementPartSec.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const ReplacementPartsSec = () => {
  const { t } = useTranslation();
  return (
    <div className="replpart-main">
      <div className="replpart-con">
        <div className="bestsolution-mx-700">
          <p className="ourproduct-main-head">
            {t("Replacement")}
            <span style={{ color: "#75be42", fontWeight: 600 }}>
              &nbsp;{t("Parts")}
            </span>
          </p>
          <div className="heading-linebox">
            <div className="heading-line"></div>
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
          <p className="heading-txt-line">{t("replpart-head-txt")}</p>
        </div>
        <div className="replpart-flex">
          <div className="replpart-imgbox">
            <img src={images.replpartimg} alt="" className="replpart-img" />
          </div>
          <div className="replpart-sec-part">
            <p>{t("replpart-txt-par-first")}</p>
            <p>{t("replpart-txt-par-sec")}</p>
            <p>{t("replpart-txt-par-third")}</p>
            <p>{t("replpart-txt-par-fourth")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplacementPartsSec;
