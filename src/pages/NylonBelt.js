import React, { useEffect } from "react";
import {
  AboutHero,
  NylonBeltBrandSing,
  NylonBeltDetailsSing,
  NylonBeltInfoSing,
  NylonBeltProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const NylonBelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Nylon Flat Belt")}
        subtitle={t("Nylon Flat Belt")}
        productname={t("Nylon Flat Belt")}
      />
      <NylonBeltInfoSing />
      <NylonBeltDetailsSing />
      <NylonBeltBrandSing />
      <NylonBeltProductSlider />
    </div>
  );
};

export default NylonBelt;
