import React from "react";

import HeaderTop from "./HeaderTop";

import style from "../../styles/header.module.scss";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <header className={style.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
