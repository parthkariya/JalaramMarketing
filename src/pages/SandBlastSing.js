import React, { useEffect } from "react";
import {
  AboutHero,
  SandBlastBrandSing,
  SandBlastDetailsSing,
  SandBlastHostInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const SandBlastSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Sandblast Hose")}
        subtitle={t("Sandblast Hose")}
        productname={t("Sandblast Hose")}
      />
      <SandBlastHostInfoSing />
      <SandBlastDetailsSing />
      <SandBlastBrandSing />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default SandBlastSing;
