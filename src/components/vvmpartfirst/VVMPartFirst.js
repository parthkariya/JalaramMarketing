import React from "react";
import "./VVMPartFirst.css";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const VVMPartFirst = () => {
  const { t } = useTranslation();

  return (
    <div className="vvmpart-first-main">
      <div className="vvmpart-first-flex-part">
        <img src={images.vvmpartfirstimg} className="vvmpart-first-part-img" />
      </div>

      <div className="vvmpart-first-flex-part2">
        <div className="vvmpart-first-flex-part2-inner">
          <p className="ourproduct-main-head txt-start">
            {t("We create the best")} <br />
            <span style={{ color: "#75be42", fontWeight: 500 }}>
              {t("products for you")}
            </span>
          </p>

          <p className="vvmpart-first-flex-part2-txt">
            {t("vvmpart-first-flex-part2-first-par-txt")}
          </p>

          <p className="vvmpart-first-flex-part2-txt">
            {t("vvmpart-first-flex-part2-first-sec-txt")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VVMPartFirst;
