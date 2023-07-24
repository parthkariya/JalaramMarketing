import React, { useEffect } from "react";
import {
  AboutHero,
  HDPETarpaulinProductSliderSing,
  ShadeNetBrandSing,
  ShadeNetDetailsSing,
  ShadeNetInfoSing,
} from "../components";

import { useTranslation } from "react-i18next";

const ShadeNetSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Shade Net")}
        subtitle={t("Shade Net")}
        productname={t("Shade Net")}
      />
      <ShadeNetInfoSing />
      <ShadeNetDetailsSing />
      <ShadeNetBrandSing />
      <HDPETarpaulinProductSliderSing />
    </div>
  );
};

export default ShadeNetSing;
