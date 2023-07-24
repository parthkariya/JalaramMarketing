import React, { useEffect } from "react";
import {
  AboutHero,
  HighTemperatureGreaseDetailsSing,
  HighTemperatureGreaseInfoSing,
  HightTempratureGreaseBrandSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const HighTemperatureGreaseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("High Temperature Grease")}
        subtitle={t("High Temperature Grease")}
        productname={t("High Temperature Grease")}
      />
      <HighTemperatureGreaseInfoSing />
      <HighTemperatureGreaseDetailsSing />
      <HightTempratureGreaseBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default HighTemperatureGreaseSing;
