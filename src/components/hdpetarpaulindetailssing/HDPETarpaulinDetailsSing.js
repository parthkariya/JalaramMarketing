import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const HDPETarpaulinDetailsSing = () => {
  const { t } = useTranslation();

  const [specification, setSpecification] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [applicaton, setApplication] = useState(false);

  const specificationn = () => {
    setApplication(false);
    setAdditionalInfo(false);
    setSpecification(true);
  };

  const additionalinfo = () => {
    setSpecification(false);
    setApplication(false);
    setAdditionalInfo(true);
  };

  const applications = () => {
    setAdditionalInfo(false);
    setSpecification(false);
    setApplication(true);
  };
  return (
    <div className="conv-details-main">
      <div className="conv-details-con">
        <div className="conv-details-head-btns">
          <button className="details-btn" onClick={() => specificationn()}>
            <BiWorld /> {t("Specification")}
          </button>
          <button className="details-btn" onClick={() => additionalinfo()}>
            <BiWorld /> {t("Additional Information")}
          </button>
          <button className="details-btn" onClick={() => applications()}>
            <BiWorld /> {t("Application")}
          </button>
        </div>

        {specification && (
          <div className="speci-main">
            <ul className="speci-lists">
              <li className="speci-list">
                {t(
                  "Strength 100GSM to 500GSM High-density polyethylene (HDPE) resins are well suited for a range of blow, injection, and rotational molding applications like IBCs and storage tanks; crates and pallets; pails and lids; automotive components; bottles and caps; toys and water sports equipment Additionally, HDPE resins are utilized in extrusion film applications such as grocery, garbage and deep-freezer bags (10 to 25 microns) This is just one more way in which the ExxonMobil polyethylene business is helping deliver tomorrow's performance today"
                )}
              </li>
              <li className="speci-list">
                {t("Benefits")} <br />{" "}
                {t(
                  "Good stiffness and impact balance even at low temperatures ESCR (environmental stress cracking resistance) Optimized processability for a broad range of applications"
                )}
              </li>
            </ul>
          </div>
        )}

        {additionalInfo && (
          <div className="additionalinfo-main">
            <div className="additionalinfo-main">
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Material")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("HDPE")}</p>
                </div>
              </div>
              <div className="additionalinfo-con">
                <div className="additionalinfo-part1">
                  <p>{t("Color")}</p>
                </div>
                <div className="additionalinfo-part-line"></div>
                <div className="additionalinfo-part2">
                  <p>{t("Black, Blue, Orange, Silver, etc")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {applicaton && <></>}
      </div>
    </div>
  );
};

export default HDPETarpaulinDetailsSing;
