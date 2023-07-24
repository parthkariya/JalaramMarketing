import React, { useEffect } from "react";
import { AboutHero, OurBusinessArena, SolutionHero } from "../components";
import BestSolution from "../components/bestsolution/BestSolution";
import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero title={t("Solutions")} subtitle={t("Solutions")} />
      <OurBusinessArena />
      <BestSolution />
    </div>
  );
};

export default Solutions;
