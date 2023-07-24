import React, { useEffect } from "react";
import { AboutHero, IndustrialGreaseProduct } from "../components";
import { useTranslation } from "react-i18next";

const IndustrialGrease = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Industrial Grease")}
        sublink={t("Products")}
        subtitle={t("Industrial Grease")}
      />
      <IndustrialGreaseProduct />
    </div>
  );
};

export default IndustrialGrease;
