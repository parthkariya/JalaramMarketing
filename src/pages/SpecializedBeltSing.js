import React, { useEffect } from "react";
import {
  AboutHero,
  SpecializedBeltBrandSing,
  SpecializedBeltDetailsSing,
  SpecializedBeltInfoSing,
  VbBeltProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const SpecializedBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Specialized belt")}
        subtitle={t("Specialized belt")}
        productname={t("Specialized belt")}
      />
      <SpecializedBeltInfoSing />
      <SpecializedBeltDetailsSing />
      <SpecializedBeltBrandSing />
      <VbBeltProductSlider />
    </div>
  );
};

export default SpecializedBeltSing;
