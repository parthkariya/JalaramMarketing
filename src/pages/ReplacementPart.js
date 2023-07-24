import React, { useEffect } from "react";
import { AboutHero, ReplacementPartsSec } from "../components";
import { useTranslation } from "react-i18next";

const ReplacementPart = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero
        title={t("Replacement Parts")}
        subtitle={t("Replacement Parts")}
      />
      <ReplacementPartsSec />
    </div>
  );
};

export default ReplacementPart;
