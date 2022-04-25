import React from "react";

import {
  WhatsAppIcon,
  ViberIcon,
  MessangerIcon,
  TelegramIcon,
} from "../elements/icons";

import style from "../../styles/social.module.scss";

const Social = () => {
  return (
    <div className={style.social}>
      <h4 className={style.title}>We are online</h4>
      <ul className={style.list}>
        <li className={style.item}>
          <WhatsAppIcon className={style.whatsApp} />
          <span>WhatsApp</span>
        </li>
        <li className={style.item}>
          <ViberIcon className={style.viber} />
          <span>WhatsApp</span>
        </li>
        <li className={style.item}>
          <MessangerIcon className={style.messanger} />
          <span>WhatsApp</span>
        </li>
        <li className={style.item}>
          <TelegramIcon className={style.telegram} />
          <span>WhatsApp</span>
        </li>
      </ul>
    </div>
  );
};

export default Social;
