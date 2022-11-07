import React from "react";
import classes from "./Header.module.css";
import classesContainer from "../common/classes/Container.module.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Nav />
    </div>
  );
};
