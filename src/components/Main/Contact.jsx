import React from "react";

import { ContactForm, ContactInfo, Map, Social } from "./";
import { Container } from "../elements/ui";
import {
  PlaneIcon1,
  PlaneIcon2,
  PlaneIcon3,
  PlaneIcon4,
  PlaneIcon5,
} from "../elements/icons";

import style from "../../styles/contact.module.scss";

const Contact = () => {
  return (
    <article className={style.contact}>
      <Container>
        <p className={style.text}>
          We are always in touch and will be happy to resolve any of your
          questions.
        </p>
        <div className={style.wrapper}>
          <Map />
          <ContactForm />
        </div>
        <ContactInfo />
        <Social />
      </Container>
      <div className={style.plane1}>
        <PlaneIcon1 />
      </div>
      <div className={style.plane2}>
        <PlaneIcon2 />
      </div>
      <div className={style.plane3}>
        <PlaneIcon3 />
      </div>
      <div className={style.plane4}>
        <PlaneIcon4 />
      </div>
      <div className={style.plane5}>
        <PlaneIcon5 />
      </div>
    </article>
  );
};

export default Contact;
