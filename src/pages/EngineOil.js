import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  AboutHero,
  EngineOilBrandSing,
  EngineOilDetailsSing,
  EngineOilIndoSing,
  SyntheticGreaseProductSlider,
} from "../components";

const EngineOil = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero
        title={t("Engine Oil")}
        subtitle={t("Engine Oil")}
        productname={t("Engine Oil")}
      />
      <EngineOilIndoSing />
      <EngineOilDetailsSing />
      <EngineOilBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default EngineOil;
