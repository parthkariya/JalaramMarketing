import React from "react";
import "./OurStrengthDownPart.css";
import { useTranslation } from "react-i18next";

const OurStrengthDownPart = () => {
  const { t } = useTranslation();

  return (
    <div className="ourstrength-downpart-main bg-color">
      <div className="ourstrengthdownpart-main-bgclr">
        <div className="ourstrengthdownpart-con">
          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-first")}
          </p>

          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-sec")}
          </p>

          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-third")}
          </p>

          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-fifth")}
          </p>

          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-fourth")}
          </p>

          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-six")}
          </p>

          <p className="ourstrengthdownpart-txt">
            {t("ourstrength-downpart-par-seven")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStrengthDownPart;
