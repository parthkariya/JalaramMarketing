import React, { useEffect } from "react";
import { AboutHero, FeedbackSuggesionForm } from "../components";
import { useTranslation } from "react-i18next";

const FeedbackSuggestion = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero
        title={t("Feedback & Suggestion")}
        subtitle={t("Feedback & Suggestion")}
      />
      <FeedbackSuggesionForm />
    </div>
  );
};

export default FeedbackSuggestion;
