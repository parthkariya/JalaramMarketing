import React, { useEffect } from "react";
import {
  AboutHero,
  OurMission,
  OurValues,
  OurVision,
  VVMPartFirst,
} from "../components";

import { useTranslation } from "react-i18next";

const MissionVissionValues = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero
        title={t("Mission, Vission & Values")}
        subtitle={t("Mission, Vission & Values")}
      />
      <VVMPartFirst />
      <OurVision />
      <OurMission />
      <OurValues />
    </div>
  );
};

export default MissionVissionValues;
