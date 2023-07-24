import React from "react";
import "./PartnerWithUsForm.css";
import images from "../../pages/images";
import { AiOutlineRight } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLocationCity } from "react-icons/md";
import { SiMicrosoftonenote } from "react-icons/si";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsLightningCharge, BsCheck2Square, BsBarChart } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const PartnerWithUsForm = () => {
  const { t } = useTranslation();
  return (
    <div className="busiinqform-main">
      <div className="busiinqform-con">
        <p className="busiinqform-head">{t("Partner With Us")} </p>

        <div className="heading-linebox jus-start">
          {/* <div className="heading-line"></div> */}
          <img src={images.leaf_icon} alt="" className="leaf-icon" />
          <div className="heading-line"></div>
        </div>
        <p className="form-head-txt">
          {t(
            "Do you have any questions? Your Interest in us is our opportunity toimpress you!"
          )}
        </p>

        <p className="partner-form-head">{t("Genral Details")}</p>
        <div className="form-head-border-main">
          <div className="form-head-border1"></div>
          <div className="form-head-border2"></div>
        </div>
        <div className="partner-form-flex">
          <div className="partner-form-inner-flex">
            <MdOutlinePersonOutline className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Proprietor Director Name")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <CiMobile4 className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Contact Number")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <TfiEmail className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Email")}
            />
          </div>
        </div>

        <p className="partner-form-head">{t("Additional Details")}</p>
        <div className="form-head-border-main">
          <div className="form-head-border1"></div>
          <div className="form-head-border2"></div>
        </div>
        <div className="partner-form-flex">
          <div className="partner-form-inner-flex">
            <MdOutlinePersonOutline className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Contact Person Name")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <CiMobile4 className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Contact Number")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <TfiEmail className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Alternate Email")}
            />
          </div>
        </div>

        <p className="partner-form-head">{t("Company Details")}</p>
        <div className="form-head-border-main">
          <div className="form-head-border1"></div>
          <div className="form-head-border2"></div>
        </div>
        <div className="partner-form-flex">
          <div className="partner-form-inner-flex">
            <HiOutlineShoppingBag className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Company Name")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <MdLocationCity className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("City")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <TfiLocationArrow className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Postal Code")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <BsLightningCharge className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("State")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <TbWorld className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Country")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <CiMobile4 className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Telephone")}
            />
          </div>

          <div className="partner-form-inner-flex">
            <BsCheck2Square className="inqform-icon" />
            <select className="inqform-inp">
              <option value="0">{t("Select Type Establishment")}</option>
              <option value="1">{t("Sole Proprietory Concern")}</option>
              <option value="2">{t("Partnership Concern")}</option>
              <option value="3">{t("Private Limited Company")}</option>
              <option value="4">{t("PublicLimited Company")}</option>
            </select>
          </div>
          <div className="partner-form-inner-flex">
            <AiOutlineCalendar className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Year Of Establishment")}
            />
          </div>
          <div className="partner-form-inner-flex">
            <BsBarChart className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Yearly Revenues (In Lakhs)")}
            />
          </div>
          <div className="partner-form-inner-flex">
            <BsCheck2Square className="inqform-icon" />
            <input
              type="text"
              className="inqform-inp"
              placeholder={t("Number Of Employee")}
            />
          </div>
          <div className="partner-form-inner-flex">
            <AiOutlineCalendar className="inqform-icon" />
            <textarea
              type="text"
              className="inqform-inp w-100"
              placeholder={t("Area Of Business/Expertise")}
            />
          </div>
        </div>
        <button className="primary-btn wi-inc">{t("Send Message")}</button>
      </div>
    </div>
  );
};

export default PartnerWithUsForm;
