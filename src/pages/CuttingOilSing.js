import React, { useEffect } from "react";
import {
  AboutHero,
  CuttingOilBrandSing,
  CuttingOilDetailsSing,
  CuttingOilInfoSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const CuttingOilSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Cutting Oil")}
        subtitle={t("Cutting Oil")}
        productname={t("Cutting Oil")}
      />

      <CuttingOilInfoSing />
      <CuttingOilDetailsSing />
      <CuttingOilBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default CuttingOilSing;
