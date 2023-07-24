import React, { useEffect } from "react";
import {
  AboutHero,
  RockDrillBrandSing,
  RockDrillHoseDetailsSing,
  RockDrillHoseInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const RockDrillHose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Rock Drill Hose")}
        subtitle={t("Rock Drill Hose")}
        productname={t("Rock Drill Hose")}
      />
      <RockDrillHoseInfoSing />
      <RockDrillHoseDetailsSing />
      <RockDrillBrandSing />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default RockDrillHose;
