import React from "react";
import classes from "./Skills.module.css";
import classesContainer from "../common/classes/Container.module.css";
import { Skill } from "./Skill/Skill";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Redux",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div className={classes.skillsBlock}>
      <div
        className={`${classesContainer.container} ${classes.skillsContainer}`}
      >
        <h2 className={classes.title}>skills</h2>
        <div className={classes.skills}>
          {skills.map((s) => (
            <Skill key={s.id} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
