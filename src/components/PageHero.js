import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const PageHero = ({ title, product, sublink }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h6 style={{ color: "#fff" }}>
          <Link to="/">{t("HomeHeroTitle")} </Link>
          {product && <Link to="/products">/ Products</Link>}
          {sublink && "/"}
          {sublink}/ {title}
        </h6>
      </div>
    </>
  );
};

export default PageHero;
