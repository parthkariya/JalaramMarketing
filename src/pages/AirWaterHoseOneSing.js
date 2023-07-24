import React, { useEffect } from "react";
import {
  AboutHero,
  AirWaterHoseDetailsOneSing,
  AirWaterHoseOneInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import AirWaterHoseBrandOneSing from "../components/airwaterhosebrandonesing/AirWaterHoseBrandOneSing";
import { useTranslation } from "react-i18next";

const AirWaterHoseOneSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Air / Water hose")}
        subtitle={t("Air / Water hose")}
        productname={t("Air / Water hose")}
      />
      <AirWaterHoseOneInfoSing />
      <AirWaterHoseDetailsOneSing />
      <AirWaterHoseBrandOneSing />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default AirWaterHoseOneSing;
