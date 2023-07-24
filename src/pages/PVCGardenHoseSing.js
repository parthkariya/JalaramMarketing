import React, { useEffect } from "react";
import {
  AboutHero,
  PVCGardenHoseInfoSing,
  PVCGardenProductSliderSing,
  PVCLeftFlatHoseBrand,
  PVCLeftFlatHoseDetailsSing,
} from "../components";
import { useTranslation } from "react-i18next";

const PVCGardenHoseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("PVC Garden Hose")}
        subtitle={t("PVC Garden Hose")}
        productname={t("PVC Garden Hose")}
      />
      <PVCGardenHoseInfoSing />
      <PVCLeftFlatHoseDetailsSing />
      <PVCLeftFlatHoseBrand />
      <PVCGardenProductSliderSing />
    </div>
  );
};

export default PVCGardenHoseSing;
