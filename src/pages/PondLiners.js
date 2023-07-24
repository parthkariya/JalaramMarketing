import React, { useEffect } from "react";
import {
  AboutHero,
  HDPETarpaulinProductSliderSing,
  PondLinerBrandSing,
  PondLinerDetailsSing,
  PondLinerInfoSing,
} from "../components";
import { useTranslation } from "react-i18next";

const PondLiners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Pond Liner")}
        subtitle={t("Pond Liner")}
        productname={t("Pond Liner")}
      />
      <PondLinerInfoSing />
      <PondLinerDetailsSing />
      <PondLinerBrandSing />
      <HDPETarpaulinProductSliderSing />
    </div>
  );
};

export default PondLiners;
