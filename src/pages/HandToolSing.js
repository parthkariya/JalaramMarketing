import React, { useEffect } from "react";
import {
  AboutHero,
  HandToolBrandSing,
  HandToolDetailsSing,
  HandToolInfoSing,
  HandToolProductSliderSing,
} from "../components";

import { useTranslation } from "react-i18next";

const HandToolSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Hand Tool")}
        subtitle={t("Hand Tool")}
        productname={t("Hand Tool")}
      />
      <HandToolInfoSing />
      <HandToolDetailsSing />
      <HandToolBrandSing />
      <HandToolProductSliderSing />
    </div>
  );
};

export default HandToolSing;
