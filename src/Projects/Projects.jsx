import React from "react";
import classes from "./Projects.module.css";
import classesContainer from "../common/classes/Container.module.css";
import { Project } from "./Project/Project";
import workImg from "../assets/image/img.png";

export const Projects = () => {
  return (
    <div className={classes.ProjectsBlock}>
      <div
        className={`${classesContainer.container} ${classes.ProjectsContainer}`}
      >
        <h2 className={classes.title}>My Works</h2>
        <div className={classes.Projects}>
          <Project
            projectImg={workImg}
            title={"Todo"}
            description={
              "lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem  lorem  lorem  lorem  lorem "
            }
          />
          <Project
            projectImg={workImg}
            title={"Todo"}
            description={
              "lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem  lorem  lorem  lorem  lorem "
            }
          />
        </div>
      </div>
    </div>
  );
};
