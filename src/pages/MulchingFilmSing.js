import React, { useEffect } from "react";

import {
  AboutHero,
  HDPETarpaulinProductSliderSing,
  MulchingFilmBrandSing,
  MulchingFilmDetailsSing,
  MulchingFilmInfoSing,
} from "../components";
import { useTranslation } from "react-i18next";

const MulchingFilmSing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("Mulching Film")}
        subtitle={t("Mulching Film")}
        productname={t("Mulching Film")}
      />
      {/* <MulchingFilmInfoSing /> */}
      <MulchingFilmInfoSing />
      <MulchingFilmDetailsSing />
      <MulchingFilmBrandSing />
      <HDPETarpaulinProductSliderSing />
    </div>
  );
};

export default MulchingFilmSing;
