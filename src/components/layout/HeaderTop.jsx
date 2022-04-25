import React from "react";

import { Container } from "../elements/ui";
import {
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  LikeIcon,
  UKIcon,
} from "../elements/icons";

import style from "../../styles/headerTop.module.scss";

const HeaderTop = () => {
  return (
    <div className={style.top}>
      <Container>
        <div className={style.topInner}>
          <ul className={style.contacts}>
            <li className={style.contactsItem}>
              <a
                className={style.contactsLink}
                href="mailto:sales@wtgspain.com"
              >
                <MailIcon />
                sales@wtgspain.com
              </a>
            </li>
            <li className={style.contactsItem}>
              <a className={style.contactsLink} href="tel:+34965020784">
                <PhoneIcon />
                +34 965 020784
              </a>
            </li>
            <li className={style.contactsItem}>
              <a className={style.contactsLink} href="#">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
          </ul>
          <div className={style.topRight}>
            <span className={style.like}>
              <LikeIcon />
              <span className={style.number}>24</span>
            </span>
            <UKIcon className={style.lang} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
