import React, { useEffect } from "react";
import {
  AboutHero,
  FoodGradeGreaseBrandSing,
  FoodGradeGreaseDetailsSing,
  FoodGradeGreaseInfoSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const FoodGradeGreaseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Food Grade Grease")}
        subtitle={t("Food Grade Grease")}
        productname={t("Food Grade Grease")}
      />
      <FoodGradeGreaseInfoSing />
      <FoodGradeGreaseDetailsSing />
      <FoodGradeGreaseBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default FoodGradeGreaseSing;
