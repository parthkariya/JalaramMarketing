import React from "react";
import { AboutHero } from "../components";
import { useTranslation } from "react-i18next";

const TaperBushVBelt = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Taper bush v Belt Pulley")}
        subtitle={t("Taper bush v Belt Pulley")}
        productname={t("Taper bush v Belt Pulley")}
      />
    </div>
  );
};

export default TaperBushVBelt;
