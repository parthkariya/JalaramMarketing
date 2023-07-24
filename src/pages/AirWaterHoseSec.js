import React, { useEffect } from "react";
import {
  AboutHero,
  AirWaterHoseDetailsOneSing,
  AirWaterHoseSecBrand,
  AirWaterHoseSecInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const AirWaterHoseSec = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Air Water hose")}
        subtitle={t("Air Water hose")}
        productname={t("Air Water hose")}
      />
      <AirWaterHoseSecInfoSing />
      <AirWaterHoseDetailsOneSing />
      <AirWaterHoseSecBrand />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default AirWaterHoseSec;
