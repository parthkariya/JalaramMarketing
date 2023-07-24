import React, { useEffect } from "react";
import {
  AboutHero,
  ElevatorBeltBrandSing,
  ElevatorBeltDetailsSing,
  ElevatorBeltInfoSing,
  EvelatorProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const ElevatorBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Elevator belt")}
        subtitle={t("Elevator belt")}
        productname={t("Elevator belt")}
      />
      <ElevatorBeltInfoSing />
      <ElevatorBeltDetailsSing />
      <ElevatorBeltBrandSing />
      <EvelatorProductSliderSing />
    </div>
  );
};

export default ElevatorBeltSing;
