import React from "react";
import { NavLink } from "react-router-dom";

import style from "../../styles/navmenu.module.scss";

const NavMenu = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink className={style.link} to="/">
            Cities
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="/">
            {" "}
            Properties{" "}
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="/">
            {" "}
            Blog{" "}
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="/">
            {" "}
            Video{" "}
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="/">
            {" "}
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
