import React, { useEffect } from "react";
import { AboutHero, FlateBeltProduct } from "../components";
import { useTranslation } from "react-i18next";

const FlatBelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Flat belt")}
        sublink={t("Products")}
        subtitle={t("Flat belt")}
      />
      <FlateBeltProduct />
    </div>
  );
};

export default FlatBelt;
