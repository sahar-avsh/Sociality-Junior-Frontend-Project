import React from "react";
import classes from "./ColorCodes.module.css";

const ColorCodes = (props) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.bubble} ${classes.published}`}></div>
      <span>Published</span>
      <div className={`${classes.bubble} ${classes.scheduled}`}></div>
      <span>Scheduled</span>
      <div className={`${classes.bubble} ${classes.approval}`}></div>
      <span>Need Approval</span>
      <div className={`${classes.bubble} ${classes.error}`}></div>
      <span>Error</span>
      <div className={`${classes.bubble} ${classes.notes}`}></div>
      <span>Notes</span>
      <div id="profile-pic" className={classes.profile}></div>
    </div>
  );
};

export default ColorCodes;
