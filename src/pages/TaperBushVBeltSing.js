import React, { useEffect } from "react";
import {
  AboutHero,
  TaperBushVBeltBrandSing,
  TaperBushVBeltDetailsSing,
  TaperBushVBeltInfo,
  TaperBushVBeltProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const TaperBushVBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Taper bush v Belt Pulley")}
        subtitle={t("Taper bush v Belt Pulley")}
        productname={t("Taper bush v Belt Pulley")}
      />
      <TaperBushVBeltInfo />
      <TaperBushVBeltDetailsSing />
      <TaperBushVBeltBrandSing />
      <TaperBushVBeltProductSlider />
    </div>
  );
};

export default TaperBushVBeltSing;
