import React from "react";
import { Link } from "react-router-dom";
import classes from "..//..//assets/style/home.module.css";

export const GitUserData = ({ user }) => {
  const { avatar_url, login, id } = user;
  return (
    <div className={classes.user}>
      <div className={classes.image}>
        <img src={avatar_url} alt={login} />
      </div>
      <div className={classes["user-info"]}>
        <div className={classes.userNameAndId}>
          <h2>{login} </h2>
          <small> #{id}</small>
        </div>
        <Link
          to={`/user/${login}`}
          style={{ color: "#f5f5f5", textDecoration: "none" }}
        >
          {`View ${login}'s profile`}{" "}
        </Link>
      </div>
    </div>
  );
};
