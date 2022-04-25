import React from "react";
import { Link } from "react-router-dom";

import { NavMenu } from "./";
import { Container } from "../elements/ui";
import { LogoIcon } from "../elements/icons";

import style from "../../styles/headerBottom.module.scss";

const HeaderBottom = () => {
  return (
    <div className={style.headerBottom}>
      <Container>
        <div className={style.inner}>
          <Link to="/">
            <LogoIcon className={style.logo} />
          </Link>
          <div className={style.headerRight}>
            <NavMenu />
            <div className={style.loginBtns}>
              <button className={style.loginBtn}>Log In</button> |
              <button className={style.loginBtn}>Sign In</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBottom;
