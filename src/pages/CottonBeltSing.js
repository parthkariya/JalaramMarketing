import React, { useEffect } from "react";
import {
  AboutHero,
  CottonBeltBrandSing,
  CottonBeltInfoSing,
  CottonBeltdetailsSing,
  SingProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const CottonBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Cotton Belt / Canvas Belt")}
        subtitle={t("Cotton Belt / Canvas Belt")}
        productname={t("Cotton Belt / Canvas Belt")}
      />
      <CottonBeltInfoSing />
      <CottonBeltdetailsSing />
      <CottonBeltBrandSing />
      <SingProductSlider />
    </div>
  );
};

export default CottonBeltSing;
