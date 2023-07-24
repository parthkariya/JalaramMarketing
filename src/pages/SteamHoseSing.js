import React, { useEffect } from "react";
import {
  AboutHero,
  SteamHoseBrandSing,
  SteamHoseDetailsSing,
  SteamHoseInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const SteamHoseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Steam Hose")}
        subtitle={t("Steam Hose")}
        productname={t("Steam Hose")}
      />
      <SteamHoseInfoSing />
      <SteamHoseDetailsSing />
      <SteamHoseBrandSing />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default SteamHoseSing;
