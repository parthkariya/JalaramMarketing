import React, { useEffect } from "react";
import { AboutHero, PowerTransmissionProduct } from "../components";
import { useTranslation } from "react-i18next";

const PowerTransmission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Power Transmission")}
        sublink={t("Products")}
        subtitle={t("Power Transmission")}
      />
      <PowerTransmissionProduct />
    </div>
  );
};

export default PowerTransmission;
