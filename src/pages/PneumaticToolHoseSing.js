import React, { useEffect } from "react";
import {
  AboutHero,
  PneumaticToolHoseBrandSing,
  PneumaticToolHoseDetailsSing,
  PneumaticToolHoseInfoSing,
  SteamHoseProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const PneumaticToolHoseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      {" "}
      <AboutHero
        title={t("Pneumatic Tool Hose")}
        subtitle={t("Pneumatic Tool Hose")}
        productname={t("Pneumatic Tool Hose")}
      />
      <PneumaticToolHoseInfoSing />
      <PneumaticToolHoseDetailsSing />
      <PneumaticToolHoseBrandSing />
      <SteamHoseProductSliderSing />
    </div>
  );
};

export default PneumaticToolHoseSing;
