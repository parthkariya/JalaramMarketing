import React, { useEffect } from "react";
import {
  AboutHero,
  GearOilBrandSing,
  GearOilDetailsSing,
  GearOilInfoSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const GearOilSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Gear Oil")}
        subtitle={t("Gear Oil")}
        productname={t("Gear Oil")}
      />
      <GearOilInfoSing />
      <GearOilDetailsSing />
      <GearOilBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default GearOilSing;
