import React, { useEffect } from "react";
import { AboutHero, TarpaulinProduct } from "../components";
import { useTranslation } from "react-i18next";

const Tarpaulin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Tarpaulin")}
        sublink={t("Products")}
        subtitle={t("Tarpaulin")}
      />
      <TarpaulinProduct />
    </div>
  );
};

export default Tarpaulin;
