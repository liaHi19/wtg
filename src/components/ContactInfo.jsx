import React from "react";

import { PhoneIcon, MailIcon } from "./elements/icons";

import style from "../styles/contact-info.module.scss";

const ContactInfo = () => {
  return (
    <div className={style.info}>
      <div className={style.item}>
        <h5 className={style.title}>Phone </h5>
        <div className={style.description}>
          <PhoneIcon />
          <span>+34 965 020784</span>
        </div>
      </div>
      <div className={style.item}>
        <h5 className={style.title}>Office in Spain </h5>
        <div className={style.description}>
          <p>
            Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first
            floor, 03189 - Orihuela Costa (Alicante), Spain
          </p>
        </div>
      </div>
      <div className={style.item}>
        <h5 className={style.title}> E-mail</h5>
        <div className={style.description}>
          <MailIcon />
          <span>sales@wtgspain.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
