import React, { useEffect } from "react";
import { AboutHero, AirMultipurposeHoseProduct } from "../components";
import { useTranslation } from "react-i18next";

const AirMultiplepuposeHose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero title={t("Air")} sublink={t("Products")} subtitle={t("Air")} />
      <AirMultipurposeHoseProduct />
    </div>
  );
};

export default AirMultiplepuposeHose;
