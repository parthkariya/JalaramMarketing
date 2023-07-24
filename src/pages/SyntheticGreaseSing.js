import React, { useEffect } from "react";
import {
  AboutHero,
  SynthesizeBeltDetailsSing,
  SynthesizeBeltInfoSing,
  SyntheticBeltBrandSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const SyntheticGreaseSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Synthetic Grease")}
        subtitle={t("Synthetic Grease")}
        productname={t("Synthetic Grease")}
      />
      <SynthesizeBeltInfoSing />
      <SynthesizeBeltDetailsSing />
      <SyntheticBeltBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default SyntheticGreaseSing;
