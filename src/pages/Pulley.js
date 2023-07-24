import React, { useEffect } from "react";
import { AboutHero, PulleyProduct } from "../components";
import { useTranslation } from "react-i18next";

const Pulley = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Pulley")}
        sublink={t("Products")}
        subtitle={t("Pulley")}
      />
      <PulleyProduct />
    </div>
  );
};

export default Pulley;
