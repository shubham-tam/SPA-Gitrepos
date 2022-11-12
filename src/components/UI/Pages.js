import React from "react";
import classes from "..//..//assets/style/home.module.css";

export const Pages = (props) => {
  return (
    <div>
      <label>
        <small className={classes.perPage}> Per Page </small>
        <select onChange={props.onChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </div>
  );
};
