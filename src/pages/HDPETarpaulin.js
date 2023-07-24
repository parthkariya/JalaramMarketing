import React, { useEffect } from "react";
import {
  AboutHero,
  HDPETarpaulinBrandSing,
  HDPETarpaulinDetailsSing,
  HDPETarpaulinInfoSing,
  HDPETarpaulinProductSliderSing,
} from "../components";

import { useTranslation } from "react-i18next";

const HDPETarpaulin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <AboutHero
        title={t("HDPE Tarpaulin")}
        subtitle={t("HDPE Tarpaulin")}
        productname={t("HDPE Tarpaulin")}
      />
      <HDPETarpaulinInfoSing />
      <HDPETarpaulinDetailsSing />
      <HDPETarpaulinBrandSing />
      <HDPETarpaulinProductSliderSing />
    </div>
  );
};

export default HDPETarpaulin;
