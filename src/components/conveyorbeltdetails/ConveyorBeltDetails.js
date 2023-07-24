import React, { useEffect } from "react";
import "./ConveyorBeltDetails.css";
import { BiWorld } from "react-icons/bi";
import { useState } from "react";
import images from "../../pages/images";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const ConveyorBeltDetails = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // console.log("locato -=>", location.state.item);
    window.scrollTo(0, 0);
    {
      // console.log("location.state.item.addinfo", location.state.item);
    }
  }, []);
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
                {t("General Widths 500 mm to 2200 mm")}
              </li>
              <li className="speci-list">
                {t("Carcass Variety Available EP / NN")}
              </li>
              <li className="speci-list">
                {t("Common Belt Rating 200 to 1800 kN/m")}
              </li>
              <li className="speci-list">{t("No of Plies 2 to 7 ply")}</li>
              <li className="speci-list">
                {t("Rubber Cover Thickness 3 mm to 25 mm (1/16” to 1”)")}
              </li>
              <li className="speci-list">{t("Edge Cut/Moulded Edge")}</li>

              <li className="speci-list">
                {t("Splicing Method Hot/ Cold/ Mechanical")}
              </li>
            </ul>
            {/* <div
              className="speci-list"
              dangerouslySetInnerHTML={{
                __html: location.state.item.inarray1.spacification,
              }}
            /> */}
          </div>
        )}

        {additionalInfo && (
          // <>
          //   {(location.state.item &&
          //     location.state.item.inarray1.addinfo !== undefined) ||
          //   location.state.item.inarray1.addinfo !== null ||
          //   location.state.item.inarray1.addinfo.length > 0
          //     ? location.state.item.inarray1.addinfo.map((item, index) => {
          //         console.log("item", item);
          //         return (
          //           <div className="additionalinfo-main">
          //             <div className="additionalinfo-main">
          //               <div className="additionalinfo-con">
          //                 <div className="additionalinfo-part1">
          //                   <p>{item.name}</p>
          //                 </div>
          //                 <div className="additionalinfo-part-line"></div>
          //                 <div className="additionalinfo-part2">
          //                   <p>{item.des}</p>
          //                 </div>
          //               </div>
          //             </div>
          //           </div>
          //         );
          //       })
          //     : null}
          // </>
          <>
            <div className="additionalinfo-main">
              <div className="additionalinfo-main">
                {/* <div className="additionalinfo-con">
                  <div className="additionalinfo-part1">
                    <p>{item.name}</p>  
                  </div>
                  <div className="additionalinfo-part-line"></div>
                  <div className="additionalinfo-part2">
                    <p>{item.des}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </>
        )}

        {applicaton && (
          <>
            <div className="application-main">
              <p className="application-txt">
                Cement works, iron and steel industry, Fly ashes and coal,
                Boiler ashes, chemical industries- Fertilisers, foundries, lime
                kilns, mining industries, stone crusher industry, salt works,
                public works, Glassworks, etc.
              </p>
            </div>
            <div>
              {/* {
                <div
                  dangerouslySetInnerHTML={{
                    __html: location.state.item.inarray1.application,
                  }}
                />
              } */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConveyorBeltDetails;
