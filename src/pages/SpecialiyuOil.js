import React, { useEffect } from "react";
import {
  AboutHero,
  EngineOilBrandSing,
  EngineOilDetailsSing,
  SpecialityOilInfoSing,
  SyntheticGreaseProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const SpecialiyuOil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Speciality Oil")}
        subtitle={t("Speciality Oil")}
        productname={t("Speciality Oil")}
      />
      <SpecialityOilInfoSing />
      <EngineOilDetailsSing />
      <EngineOilBrandSing />
      <SyntheticGreaseProductSlider />
    </div>
  );
};

export default SpecialiyuOil;
