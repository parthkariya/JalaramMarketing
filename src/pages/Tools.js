import React, { useEffect } from "react";
import { AboutHero, ToolsProduct } from "../components";
import { useTranslation } from "react-i18next";

const Tools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Tools")}
        sublink={t("Products")}
        subtitle={t("Tools")}
      />
      <ToolsProduct />
    </div>
  );
};

export default Tools;
