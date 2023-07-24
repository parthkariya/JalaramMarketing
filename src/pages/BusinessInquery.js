import React, { useEffect } from "react";
import { AboutHero, BusiInqHero, BusinessInqForm } from "../components";
import { useTranslation } from "react-i18next";

const BusinessInquery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div>
      <AboutHero
        title={t("Business Inquery")}
        subtitle={t("Business Inquery")}
      />
      <BusinessInqForm />
    </div>
  );
};

export default BusinessInquery;
