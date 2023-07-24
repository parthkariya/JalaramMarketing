import React from "react";
import "./ContactDetails.css";
import { AiOutlineRight } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import images from "../../pages/images";
import { useTranslation } from "react-i18next";

const ContactDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="contactdetails-main">
      <img src={images.contactbg} className="contactbg" alt="contact details" />
      <div className="contactdetails-imgshade">
        <div className="contactdetails-part">
          <div className="contactdetails-box">
            <div className="contactdetails-box-inner-flex">
              <GoLocation className="contactdetails-box-icon" />
              <p className="contactdetails-box-head">
                {" "}
                {t("Jalaram Chambers")}
              </p>
            </div>
            <p className="contactdetails-box-txt">
              {t("Rajputpara Main Road, Rajkot - 360 001 Gujarat, INDIA")}
            </p>
          </div>

          <div className="contactdetails-box">
            <div className="contactdetails-box-inner-flex">
              <TfiEmail className="contactdetails-box-icon" />
              <p className="contactdetails-box-head"> {t("E-mail")}</p>
            </div>
            <a
              href="info@jalarammarketing.com"
              className="contactdetails-box-txt"
            >
              info@jalarammarketing.com
            </a>
            <a
              href="jalarammachinerystores@yahoo.com"
              className="contactdetails-box-txt"
            >
              jalarammachinerystores@yahoo.com
            </a>
          </div>

          <div className="contactdetails-box">
            <div className="contactdetails-box-inner-flex">
              <CiMobile4 className="contactdetails-box-icon" />
              <p className="contactdetails-box-head"> {t("Phone Numbers")}</p>
            </div>
            <a href="tel:+91 281 2228888" className="contactinfo-txt">
              +91 281 2228888
            </a>
            <a href="tel:+91 281 2234695" className="contactinfo-txt">
              +91 281 2234695
            </a>
            <a href="tel:+91 281 2231130" className="contactinfo-txt">
              +91 281 2231130
            </a>
          </div>
        </div>

        <div className="contactdetails-part">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7383.288021231468!2d70.80155900000001!3d22.291471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca05107e8091%3A0x677e57bb29f7e54e!2sJalaram%20Group%20Of%20Companies!5e0!3m2!1sen!2sus!4v1681107757268!5m2!1sen!2sus"
            width="650"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="contactdetails-map"
          ></iframe>
        </div>
        <div className="contactdetails-part">
          <div className="contactdetails-box">
            <div className="contactdetails-box-inner-flex">
              <GoLocation className="contactdetails-box-icon" />
              <p className="contactdetails-box-head"> {t("Factory Unit")}</p>
            </div>
            <p className="contactdetails-box-txt">{t("footer-factory-addr")}</p>
          </div>

          <div className="contactdetails-box">
            <div className="contactdetails-box-inner-flex">
              <TfiEmail className="contactdetails-box-icon" />
              <p className="contactdetails-box-head"> {t("Whatsapp No")}.</p>
            </div>
            <a
              href="tel:+91 90993 00017

"
              className="contactinfo-txt"
            >
              +91 90993 00017
            </a>
          </div>

          <div className="contactdetails-box">
            <div className="contactdetails-box-inner-flex">
              <CiMobile4 className="contactdetails-box-icon" />
              <p className="contactdetails-box-head"> {t("Office Hours")}</p>
            </div>

            <p className="contactinfo-txt">{t("Mon To Sat - 10.00 - 07.00")}</p>
            <p className="contactinfo-txt">{t("Sunday - Close")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
