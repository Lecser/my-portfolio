import React from "react";
import classes from "./Contacts.module.css";
import classesContainer from "../common/classes/Container.module.css";

export const Contacts = () => {
  return (
    <div className={classes.ContactsBlock}>
      <div
        className={`${classesContainer.container} ${classes.ContactsContainer}`}
      >
        <h2 className={classes.title}>Contacts</h2>
        <form className={classes.feedbackForm}>
          <input className={classes.formInput} type="text" name="name" />
          <input className={classes.formInput} type="text" name="name" />
          <textarea className={classes.textArea}></textarea>
        </form>
        <button className={classes.sendBtn}>Отправить</button>
      </div>
    </div>
  );
};
