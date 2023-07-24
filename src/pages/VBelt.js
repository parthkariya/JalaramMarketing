import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  AboutHero,
  VBeltBrandSing,
  VBeltInfoSing,
  VbBeltProductSlider,
  VbeltDetailsSing,
} from "../components";

const VBelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("VBelt")}
        subtitle={t("VBelt")}
        productname={t("VBelt")}
      />
      <VBeltInfoSing />
      <VbeltDetailsSing />
      <VBeltBrandSing />
      <VbBeltProductSlider />
    </div>
  );
};

export default VBelt;
