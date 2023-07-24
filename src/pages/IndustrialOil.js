import React, { useEffect } from "react";
import { AboutHero, IndustrialOilProduct } from "../components";
import { useTranslation } from "react-i18next";

const IndustrialOil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Industrial Oil")}
        sublink={t("Products")}
        subtitle={t("Industrial Oil")}
      />
      <IndustrialOilProduct />
    </div>
  );
};

export default IndustrialOil;
