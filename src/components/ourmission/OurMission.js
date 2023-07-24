import React from "react";
import "./OurMission.css";
import images from "../../pages/images";
import { TfiCup } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
const OurMission = () => {
  const { t } = useTranslation();
  return (
    <div className="ourvision-main p-leftm mr0">
      <div className="ourvision-part2 paddigl">
        <p className="ourvision-head">
          {t("ourmissionOur")} <br />{" "}
          <span style={{ fontWeight: "600" }}>{t("ourmissionMssion")}</span>
        </p>
        <div className="ourmision-txt-flex">
          <div className="ourmision-iconbox">
            <TfiCup className="ourmision-txt-icon" />
          </div>
          <p className="ourvision-txt txt-size-chng">
            {t("ourmision-txt-trans-line-first")}
          </p>
        </div>

        <div className="ourmision-txt-flex">
          <div className="ourmision-iconbox">
            <TfiCup className="ourmision-txt-icon" />
          </div>
          <p className="ourvision-txt txt-size-chng">
            {t("ourmision-txt-trans-line-sec")}
          </p>
        </div>

        <div className="ourmision-txt-flex">
          <div className="ourmision-iconbox">
            <TfiCup className="ourmision-txt-icon" />
          </div>
          <p className="ourvision-txt txt-size-chng">
            {t("ourmision-txt-trans-line-third")}
          </p>
        </div>

        <div className="ourmision-txt-flex">
          <div className="ourmision-iconbox">
            <TfiCup className="ourmision-txt-icon" />
          </div>
          <p className="ourvision-txt txt-size-chng">
            {t("ourmision-txt-trans-line-fourth")}
          </p>
        </div>
      </div>
      <div className="ourvision-part1">
        <div className="ourvision-imgbox">
          <img src={images.ourmision} className="ourvision-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
