import React, { useEffect } from "react";
import {
  AboutHero,
  CarbonFreeHoseBrandSing,
  CarbonFreeHoseDetailsSing,
  CarbonFreeHoseInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const CarbonFreeHoseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Carbon Free Hose")}
        subtitle={t("Carbon Free Hose")}
        productname={t("Carbon Free Hose")}
      />
      <CarbonFreeHoseInfoSing />
      <CarbonFreeHoseDetailsSing />
      <CarbonFreeHoseBrandSing />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default CarbonFreeHoseSing;
