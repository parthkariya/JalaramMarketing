import React, { useEffect } from "react";
import { AboutHero, PartnerWithUsForm } from "../components";
import { useTranslation } from "react-i18next";

const PartnerWithUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero title={t("Partner With Us")} subtitle={t("Partner With Us")} />
      <PartnerWithUsForm />
    </div>
  );
};

export default PartnerWithUs;
