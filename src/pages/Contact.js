import React, { useEffect } from "react";
import {
  AboutHero,
  ContactDetails,
  ContactHero,
  ContactInfo,
} from "../components";
import { useTranslation } from "react-i18next";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div>
      <AboutHero title={t("Contact")} subtitle={t("Contact")} />
      <ContactInfo />
      <ContactDetails />
    </div>
  );
};

export default Contact;
