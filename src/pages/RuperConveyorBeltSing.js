import React, { useEffect } from "react";
import {
  AboutHero,
  ConveyorBeltDetails,
  RuberConveyarBeltBrand,
  RuberConveyorBeltInfo,
  SingProductSlider,
} from "../components";
import { useLocation, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const RuperConveyorBelt = () => {
  const { slug } = useParams();
  const location = useLocation();
  // useEffect(() => {
  //   console.log("locato -=>", location.state.item);
  //   window.scrollTo(0, 0);
  // }, [location.state.item.slug]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { t } = useTranslation();

  return (
    <div>
      {/* <AboutHero
        title={location.state.item.name}
        subtitle="Conveyor Belt"
        productname={location.state.item.name}
      /> */}
      <AboutHero
        title={t("Rubber Conveyor Belt")}
        subtitle={t("Rubber Conveyor Belt")}
        productname={t("Rubber Conveyor Belt")}
      />
      <RuberConveyorBeltInfo />
      <ConveyorBeltDetails />
      <RuberConveyarBeltBrand />
      <SingProductSlider />
    </div>
  );
};

export default RuperConveyorBelt;
