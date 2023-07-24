import React, { useEffect } from "react";
import { AboutHero, AgricultureHoseProduct } from "../components";
import { useTranslation } from "react-i18next";

const AgricultureHose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Agriculture Hose")}
        sublink={t("Products")}
        subtitle={t("Agriculture Hose")}
      />
      <AgricultureHoseProduct />
    </div>
  );
};

export default AgricultureHose;
