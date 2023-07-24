import React, { useEffect } from "react";
import {
  AboutHero,
  TimmingBushVBeltBrandSing,
  TimmingBushVBeltProductSlider,
  TimmingPulleyVBeltInfoSing,
  TimmngBushVBeltDetailsSing,
} from "../components";
import { useTranslation } from "react-i18next";

const TimmingPulletVBelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Timing / Pulley v Belt Pulley")}
        subtitle={t("Timing / Pulley v Belt Pulley")}
        productname={t("Timing / Pulley v Belt Pulley")}
      />
      <TimmingPulleyVBeltInfoSing />
      <TimmngBushVBeltDetailsSing />
      <TimmingBushVBeltBrandSing />
      <TimmingBushVBeltProductSlider />
    </div>
  );
};

export default TimmingPulletVBelt;
