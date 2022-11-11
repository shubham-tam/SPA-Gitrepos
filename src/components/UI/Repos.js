import React from "react";
import star from "..//..//assets/images/star.png";
import fork from "..//..//assets/images/fork.png";
import classes from ".//..//../assets/style/repos.module.css";
import moment from "moment/moment";

export const Repos = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    language,
    default_branch,
    forks,
    open_issues,
    watchers,
    stargazers_count,
    updated_at,
    owner,
  } = repo;

  return (
    <div>
      <div className={classes.header}>
        <h3>
          <a href={html_url} target="_blank" rel="noreferrer">
            {name}
          </a>{" "}
          - <small> {owner.login}</small>
        </h3>
      </div>
      <div className={classes.repoInfo}>
        <div className={classes.moreInfos}>
          <div>
            {" "}
            <img src={fork} alt="" className={classes.icon} />
            Forks: {forks}
          </div>
          <div>
            {" "}
            <img src={star} alt="" className={classes.icon} />
            Stars: {stargazers_count}
          </div>
          <div> Watchers: {watchers}</div>
          <div> Branch: {default_branch}</div>
          <div> Issues: {open_issues}</div>
        </div>
        <div className={classes.dateNTime}>
          {" "}
          Last updated at:
          {moment(updated_at).format("DD-MM-YYYY on  HH:mm ")}
        </div>

        <div className={classes.description}>{description}</div>

        {language && (
          <small className={classes.language}>
            <em> Written in {language} </em>
          </small>
        )}
      </div>
    </div>
  );
};
