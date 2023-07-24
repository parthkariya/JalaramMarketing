import React, { useEffect } from "react";
import {
  AboutHero,
  GenralPurposeBrandSing,
  GenralPurposeGreaseDetailsSing,
  GenralPurposeGreseInfOSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const GenralPurposeGreseSing = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero
        title={t("General Purpose Grease")}
        subtitle={t("General Purpose Grease")}
        productname={t("General Purpose Grease")}
      />
      <GenralPurposeGreseInfOSing />
      <GenralPurposeGreaseDetailsSing />
      <GenralPurposeBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default GenralPurposeGreseSing;
