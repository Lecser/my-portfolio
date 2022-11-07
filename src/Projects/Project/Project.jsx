import React from "react";
import classes from "./Project.module.css";

export const Project = (props) => {
  return (
    <div className={classes.project}>
      <div className={classes.imgContainer}>
        <img className={classes.projectImg} src={props.projectImg} alt="123" />
        <button className={classes.checkBtn}>Смотреть</button>
      </div>
      <h3 className={classes.title}>{props.title}</h3>
      <span className={classes.description}>{props.description}</span>
    </div>
  );
};
