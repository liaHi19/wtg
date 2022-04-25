import React from "react";

import ContactForm from "./ContactForm";
import Map from "./Map";
import Container from "./elements/Container";

import style from "../styles/contact.module.scss";

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
      </Container>
    </article>
  );
};

export default Contact;
