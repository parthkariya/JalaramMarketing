import React, { useEffect } from "react";
import {
  AboutHero,
  PUConveyorBeltBrandSing,
  PUConveyorBeltDetailsSing,
  PUConveyorBeltInfoSing,
  SingProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const PUConveyorBeltSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Pvc / PU Conveyor Belt")}
        subtitle={t("Pvc / PU Conveyor Belt")}
        productname={t("Pvc / PU Conveyor Belt")}
      />
      <PUConveyorBeltInfoSing />
      <PUConveyorBeltDetailsSing />
      <PUConveyorBeltBrandSing />
      <SingProductSlider />
    </div>
  );
};

export default PUConveyorBeltSing;
