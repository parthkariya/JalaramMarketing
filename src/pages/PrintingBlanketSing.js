import React, { useEffect } from "react";
import {
  AboutHero,
  PrintingBlanketBrandSing,
  PrintingBlanketDetailsSing,
  PrintingBlanketInfoSing,
  SingProductSlider,
} from "../components";
import { useTranslation } from "react-i18next";

const PrintingBlanketSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Printing Blanket")}
        subtitle={t("Printing Blanket")}
        productname={t("Printing Blanket")}
      />
      <PrintingBlanketInfoSing />
      <PrintingBlanketDetailsSing />
      <PrintingBlanketBrandSing />
      <SingProductSlider />
    </div>
  );
};

export default PrintingBlanketSing;
