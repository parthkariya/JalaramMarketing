import React, { useEffect } from "react";
import {
  AboutHero,
  PlasticModularBrandSing,
  PlasticModuleDetails,
  PlasticModuleInfo,
  SingProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const PlasticModularSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <AboutHero
          title={t("Plastic Modular")}
          subtitle={t("Plastic Modular")}
        />
        <PlasticModuleInfo />
        <PlasticModuleDetails />
        <PlasticModularBrandSing />
        <SingProductSlider />
      </div>
    </div>
  );
};

export default PlasticModularSing;
