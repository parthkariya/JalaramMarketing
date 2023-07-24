import React, { useEffect } from "react";
import {
  AboutHero,
  TimmingBeltBrandSing,
  TimmingBeltDetailsSing,
  TimmingBeltSingInfo,
  VbBeltProductSlider,
} from "../components";

import { useTranslation } from "react-i18next";

const TimmingBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div>
      <AboutHero
        title={t("Timing belt")}
        subtitle={t("Timing belt")}
        productname={t("Timing belt")}
      />

      <TimmingBeltSingInfo />
      <TimmingBeltDetailsSing />
      <TimmingBeltBrandSing />
      <VbBeltProductSlider />
    </div>
  );
};

export default TimmingBeltSing;
