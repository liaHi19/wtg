import React from "react";

import { HeaderTop, HeaderBottom } from "./";

import style from "../../styles/header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
