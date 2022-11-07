import React from "react";
import classes from "./Main.module.css";
import classesContainer from "../common/classes/Container.module.css";

export const Main = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classesContainer.container}>
        <div className={classes.text}>
          <span>hi there</span>
          <h1>I am Alexey Vidov</h1>
          <p>A Frontend Developer</p>
        </div>
        <div className={classes.photo}></div>
      </div>
    </div>
  );
};
