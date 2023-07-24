import React, { useEffect } from "react";
import {
  AboutHero,
  HDPETarpaulinProductSliderSing,
  LaminatedTarpaulinBrandSing,
  LaminatedTarpaulinDetailSing,
  LaminatedTarpaulinDetailsSing,
  LaminatedTarpaulinInfoSing,
} from "../components";

import { useTranslation } from "react-i18next";

const LaminatedTarpaulinSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Laminated Tarpaulin")}
        subtitle={t("Laminated Tarpaulin")}
        productname={t("Laminated Tarpaulin")}
      />
      <LaminatedTarpaulinInfoSing />
      <LaminatedTarpaulinDetailsSing />
      <LaminatedTarpaulinBrandSing />
      <HDPETarpaulinProductSliderSing />
    </div>
  );
};

export default LaminatedTarpaulinSing;
