import React from "react";
import classes from "./Nav.module.css";

export const Nav = () => {
  return (
    <div className={classes.nav}>
      <a href="">Главная</a>
      <a href="">Скиллы</a>
      <a href="">Работа</a>
      <a href="">Контакты</a>
    </div>
  );
};
