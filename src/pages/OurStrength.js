import React, { useEffect } from "react";
import {
  AboutHero,
  OurStrengthDownPart,
  OurStrengthHero,
  OurStrengthPart,
} from "../components";
import { useTranslation } from "react-i18next";

const OurStrength = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero
        title={t("hero-heading-our-strength")}
        subtitle={t("hero-heading-our-strength")}
      />
      <OurStrengthPart />
      <OurStrengthDownPart />
    </div>
  );
};

export default OurStrength;
