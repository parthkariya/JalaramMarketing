import React, { useEffect } from "react";
import {
  AboutHero,
  AgricultureHoseProductSliderSing,
  PVCLeftFlatHoseBrand,
  PVCLeftFlatHoseDetailsSing,
  PVCLeftFlatHoseInfo,
} from "../components";
import { useTranslation } from "react-i18next";

const PVCLeftFlatHoseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("PVC Left Flat Hose / Kisan Pipe")}
        subtitle={t("PVC Left Flat Hose / Kisan Pipe")}
        productname={t("PVC Left Flat Hose / Kisan Pipe")}
      />
      <PVCLeftFlatHoseInfo />
      <PVCLeftFlatHoseDetailsSing />
      <PVCLeftFlatHoseBrand />
      <AgricultureHoseProductSliderSing />
    </div>
  );
};

export default PVCLeftFlatHoseSing;
