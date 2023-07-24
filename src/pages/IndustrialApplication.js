import React from "react";
import { AboutHero, InduAppHero, IndustrialApp } from "../components";
import { useTranslation } from "react-i18next";

const IndustrialApplication = () => {
  const { t } = useTranslation();
  return (
    <div>
      <AboutHero
        title={t("Industrial Application")}
        subtitle={t("Industrial Application")}
      />
      <IndustrialApp />
    </div>
  );
};

export default IndustrialApplication;
