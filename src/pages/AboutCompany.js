import React, { useEffect } from "react";
import {
  AboutHero,
  AboutusCard,
  AboutusFooterTop,
  CardDownPart,
  OurStoryAboutus,
} from "../components";

import { useTranslation } from "react-i18next";

const AboutCompany = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero title={t("About Us")} subtitle={t("About Us")} />
      <OurStoryAboutus />
      <AboutusCard />
      <CardDownPart />
      <AboutusFooterTop />
    </div>
  );
};

export default AboutCompany;
