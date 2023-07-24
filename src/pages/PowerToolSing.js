import React, { useEffect } from "react";
import {
  AboutHero,
  PowerToolBrandSing,
  PowerToolDetailsSing,
  PowerToolInfoSing,
  PowerToolProductSliderSing,
} from "../components";
import { useTranslation } from "react-i18next";

const PowerToolSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Power Tool")}
        subtitle={t("Power Tool")}
        productname={t("Power Tool")}
      />
      <PowerToolInfoSing />
      <PowerToolDetailsSing />
      <PowerToolBrandSing />
      <PowerToolProductSliderSing />
    </div>
  );
};

export default PowerToolSing;
