import React, { useEffect } from "react";
import {
  AboutHero,
  HydraulicOilBrandSing,
  HydraulicOilDetailsSing,
  HydraulicOilInfoSing,
  SyntheticGreaseProductSlider,
} from "../components";

import { useTranslation } from "react-i18next";

const HydrolicOilSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Hydraulic Oil")}
        subtitle={t("Hydraulic Oil")}
        productname={t("Hydraulic Oil")}
      />
      <HydraulicOilInfoSing />
      <HydraulicOilDetailsSing />
      <HydraulicOilBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default HydrolicOilSing;
