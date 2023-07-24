import React, { useEffect } from "react";
import {
  AboutHero,
  PVCLeftFlatHoseDetailsSing,
  PVCSolutionBrandSing,
  PVCSolutionHoseInfoSing,
  PVCSolutionHoseProdSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const PVCSolutionHose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("PVC suction hose")}
        subtitle={t("PVC suction hose")}
        productname={t("PVC suction hose")}
      />
      <PVCSolutionHoseInfoSing />
      <PVCLeftFlatHoseDetailsSing />
      <PVCSolutionBrandSing />
      <PVCSolutionHoseProdSliderSing />
    </div>
  );
};

export default PVCSolutionHose;
