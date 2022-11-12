import React from "react";
import { Link } from "react-router-dom";
import classes from "..//..//assets/style/home.module.css";

export const GitUserData = ({ user }) => {
  const { avatar_url, login, id, html_url } = user;
  return (
    <div className={classes.user}>
      <div className={classes.image}>
        <img src={avatar_url} alt={login} />
      </div>
      <div className={classes["user-info"]}>
        <div className={classes.userNameAndId}>
          <Link
            to={`/user/${login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkUser}
          >
            <h2>{login} </h2>{" "}
          </Link>
          {/* <h2>{login} </h2> */}
          <small> #{id}</small>
        </div>
        {/* <Link
          to={`/user/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkUser}
        >
          {`View ${login} on Github`}{" "}
        </Link> */}
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          style={{ textdecoration: "none", color: "red" }}
        >
          {" "}
          {`View ${login} on Github`}{" "}
        </a>
      </div>
    </div>
  );
};
