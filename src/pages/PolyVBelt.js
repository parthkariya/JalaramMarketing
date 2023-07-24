import React, { useEffect } from "react";
import {
  AboutHero,
  PolyVBeltBrandSing,
  PolyVBeltDetailsSing,
  VbBeltProductSlider,
} from "../components";
import PolyVBeltInfoSing from "../components/polyvbeltinfosing/PolyVBeltInfoSing";
import { useTranslation } from "react-i18next";

const PolyVBelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Poly V Belt")}
        subtitle={t("Poly V Belt")}
        productname={t("Poly V Belt")}
      />
      <PolyVBeltInfoSing />
      <PolyVBeltDetailsSing />
      <PolyVBeltBrandSing />
      <VbBeltProductSlider />
    </div>
  );
};

export default PolyVBelt;
