import React, { useEffect } from "react";
import { AboutHero, ConveyorBeltProduct } from "../components";
import { useTranslation } from "react-i18next";

const ConveyorBelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Conveyor Belts")}
        sublink={t("Products")}
        subtitle={t("Conveyor Belts")}
      />
      <ConveyorBeltProduct />
    </div>
  );
};

export default ConveyorBelt;
