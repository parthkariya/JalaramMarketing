import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  AboutHero,
  CuttingOilBrandSing,
  CuttingOilDetailsSing,
  EngineOilBrandSing,
  EngineOilDetailsSing,
  FoodGradeOilBrandSing,
  FoodGradeOilInfoSing,
  SyntheticGreaseProductSlider,
} from "../components";

const FoodGradeOilSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Food Grade Oil")}
        subtitle={t("Food Grade Oil")}
        productname={t("Food Grade Oil")}
      />
      <FoodGradeOilInfoSing />
      <EngineOilDetailsSing />
      <FoodGradeOilBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default FoodGradeOilSing;
