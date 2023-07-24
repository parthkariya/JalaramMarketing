import React from "react";
import "./ContactInfo.css";
import { AiOutlineRight } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="contactinfo-main">
      <div className="contactinfo-flex">
        <div className="contactinfo-inner-flex">
          <MdOutlinePersonOutline className="contactinfo-icon" />
          <p className="contactinfo-txt-head">{t("Contact Person")}</p>
          <p className="contactinfo-txt">{t("Mr Shyam Ghedia")}</p>
        </div>

        <div className="contactinfo-inner-flex">
          <TfiEmail className="contactinfo-icon" />
          <p className="contactinfo-txt-head">{t("Email")}</p>
          <a
            href="mailto:shyam@jalarammarketing.com"
            className="contactinfo-txt"
          >
            {/* <a href="shyam@jalarammarketing.com" className="contactinfo-txt"> */}
            shyam@jalarammarketing.com
          </a>
        </div>

        <div className="contactinfo-inner-flex">
          <CiMobile4 className="contactinfo-icon" />
          <p className="contactinfo-txt-head">{t("PHONE")}</p>
          <a href="tel:+91 99045 55557" className="contactinfo-txt">
            +91 99045 55557
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
