import React from "react";
import classes from "../assets/style/home.module.css";
import picture from "..//../src/img.jpg";

export const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes["search-form"]}>
        <h2> Github search user </h2>
        <form>
          <input type="text" />
          <button> Search </button>
        </form>
      </div>
      <div className={classes["search-results"]}>
        <div className={classes.user}>
          <div className={classes.image}>
            <img src={picture} alt="" />
          </div>
          <div className={classes["user-info"]}>
            <h3>Name of the user </h3>
            <small> ID</small>
            <a href="/user"> View profile </a>
          </div>
        </div>
      </div>
    </div>
  );
};
