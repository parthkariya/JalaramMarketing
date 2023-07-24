import React from "react";
import "./BusinessInqForm.css";
import images from "../../pages/images";
import { AiOutlineRight } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLocationCity } from "react-icons/md";
import { SiMicrosoftonenote } from "react-icons/si";
import { useTranslation } from "react-i18next";

const BusinessInqForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="busiinqform-main">
        <div className="busiinqform-con">
          <p className="busiinqform-head">{t("Business Inquery")}</p>

          <div className="heading-linebox jus-start">
            {/* <div className="heading-line"></div> */}
            <img src={images.leaf_icon} alt="" className="leaf-icon" />
            <div className="heading-line"></div>
          </div>
          <p className="form-head-txt">
            {t(
              "Do you have any questions? Your Interest in us is our opportunity to impress you!"
            )}
          </p>

          <div className="inqform">
            <div className="inqform-inner-flex">
              <div className="inqform-part">
                <MdOutlinePersonOutline className="inqform-icon" />
                <input
                  type="text"
                  className="inqform-inp"
                  placeholder={t("First Name")}
                />
              </div>
              <div className="inqform-part">
                <MdOutlinePersonOutline className="inqform-icon" />
                <input
                  type="text"
                  className="inqform-inp"
                  placeholder={t("Last Name")}
                />
              </div>
            </div>

            <div className="inqform-inner-flex">
              <div className="inqform-part">
                <CiMobile4 className="inqform-icon" />
                <input
                  type="text"
                  className="inqform-inp"
                  placeholder={t("Mobile")}
                />
              </div>
              <div className="inqform-part">
                <TfiEmail className="inqform-icon" />
                <input
                  type="text"
                  className="inqform-inp"
                  placeholder={t("Your Email Id")}
                />
              </div>
            </div>

            <div className="inqform-inner-flex">
              <div className="inqform-part">
                <HiOutlineShoppingBag className="inqform-icon" />
                <input
                  type="text"
                  className="inqform-inp"
                  placeholder={t("Company Name")}
                />
              </div>
              <div className="inqform-part">
                <MdLocationCity className="inqform-icon" />
                <input
                  type="text"
                  className="inqform-inp"
                  placeholder={t("City")}
                />
              </div>
            </div>
            <div className="inqform-part wi-100">
              <GoLocation className="inqform-icon" />
              <textarea
                placeholder={t("Address")}
                className="inqform-inp inqform-inp-full"
              ></textarea>
            </div>
            <div className="inqform-part wi-100">
              <SiMicrosoftonenote className="inqform-icon" />
              <textarea
                placeholder={t("Tell us about your project or idea")}
                className="inqform-inp inqform-inp-full"
              ></textarea>
            </div>
            <button className="primary-btn wi-inc">{t("Send Message")}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessInqForm;
