import React, { useEffect } from "react";
import {
  AboutHero,
  CaanvasBeltBrandSing,
  CanvasBeltDetailsSing,
  CanvasBeltInfoSing,
  CanvasBeltProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const CanvasBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Canvas Flat belt")}
        subtitle={t("Canvas Flat belt")}
        productname={t("Canvas Flat belt")}
      />
      <CanvasBeltInfoSing />
      <CanvasBeltDetailsSing />
      <CaanvasBeltBrandSing />
      <CanvasBeltProductSliderSing />
    </div>
  );
};

export default CanvasBeltSing;
