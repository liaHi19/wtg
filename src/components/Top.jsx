import React from "react";

import Container from "./elements/Container";
import MyButton from "./elements/MyButton";

import style from "../styles/top.module.scss";

const Top = () => {
  return (
    <section className={style.top}>
      <Container>
        <div className={style.inner}>
          <span className={style.pretitle}>WTG SPAIN</span>
          <h2 className={style.title}>
            Do you need <span className={style.decor}>some help</span> ?
          </h2>
          <p className={style.text}>
            Contact us right now and our team will do everything to help you.
          </p>
          <MyButton className={style.button}>Contact us</MyButton>
        </div>
      </Container>
    </section>
  );
};

export default Top;
