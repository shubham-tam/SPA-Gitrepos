import React from "react";
import star from "..//..//assets/images/star.png";
import fork from "..//..//assets/images/fork.svg";
import branch from "..//..//assets/images/branch.svg";
import watcher from "..//..//assets/images/watcher.png";
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
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
        (<small>{owner.login}</small>)
      </div>
      <div className={classes.repoInfo}>
        <div className={classes.moreInfos}>
          <div className={classes.iconsBg}>
            <img src={fork} alt="" className={classes.icon} />
            Forks : {forks}
          </div>
          <div className={classes.iconsBg}>
            <img src={star} alt="" className={classes.icon} />
            Stars : {stargazers_count}
          </div>
          <div className={classes.iconsBg}>
            <img src={watcher} alt="" className={classes.icon} />
            Watchers : {watchers}
          </div>
          <div className={classes.iconsBg}>
            <img src={branch} alt="" className={classes.icon} />
            Branch : {default_branch}
          </div>
          <div className={classes.iconsBg}> Issues : {open_issues}</div>
        </div>
        <div className={classes.dateNTime}>
          Last updated at {moment(updated_at).format("DD-MM-YYYY on  HH:mm ")}
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
