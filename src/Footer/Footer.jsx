import React from "react";
import classes from "./Footer.module.css";
import classesContainer from "../common/classes/Container.module.css";
import { Social } from "./Social/Social";

export const Footer = () => {
  return (
    <div className={classes.FooterBlock}>
      <div
        className={`${classesContainer.container} ${classes.FooterContainer}`}
      >
        <h2 className={classes.title}>Alexey Vidov</h2>
        <div className={classes.Social}>
          <Social />
          <Social />
          <Social /> <Social />
        </div>
      </div>
    </div>
  );
};
