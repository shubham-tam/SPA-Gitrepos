import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Repos } from "./UI/Repos";
import site from "..//assets/images/site.png";
import github from "..//assets/images/github.png";
import location from "..//assets/images/location.png";
import user from "..//assets/images/user.png";
import classes from "..//assets/style/user.module.css";
import GoToTop from "./UI/GoToTop";
import axios from "..//axios";

export const User = () => {
  const { login } = useParams();

  //user information
  const [userInfo, setUserInfo] = useState({});

  // userRepos

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const res = await Promise.all([
          axios.get(`users/${login}`),
          axios.get(`users/${login}/repos`),
        ]);
        setUserInfo(res[0].data);
        setRepos(res[1].data);
        // console.log(res[0].data);
        // console.log(res[1].data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInformation();
  }, [login]);

  return (
    <div className="container">
      <Link to="/" className={classes.back}>
        Go Back
      </Link>
      <div className={classes["user-information"]}>
        <div className={classes.image}>
          <img src={userInfo?.avatar_url} alt={userInfo?.login} />
        </div>
        <div className={classes["user-container"]}>
          <h3> {userInfo?.login}</h3>
          <p>{userInfo?.bio}</p>
          <div className={classes["more-data"]}>
            <p>
              {" "}
              <img src={user} alt="" className={classes.icon} />
              {userInfo?.followers} Followers. Following {userInfo?.following}
            </p>

            {userInfo?.location && (
              <p>
                <img src={location} alt="" className={classes.icon} />
                {userInfo?.location}
              </p>
            )}
            {userInfo?.blog && (
              <p>
                <img src={site} alt="" className={classes.icon} />

                <a
                  href={userInfo?.blog}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.website}
                >
                  {userInfo?.blog}{" "}
                </a>
              </p>
            )}
            <p>
              {" "}
              <img src={github} alt="" className={classes.icon} />
              <a
                href={userInfo?.html_url}
                target="_blank"
                rel="noreferrer"
                className={classes.links}
              >
                {`Visit ${login} on github`}{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
      {repos ? (
        repos.map((repo) => {
          return (
            <li key={repo.id} className={classes.list}>
              <Repos id={repo.id} repo={repo} />
            </li>
          );
        })
      ) : (
        <h2>The user has no repositories in their Github account.</h2>
      )}
      <GoToTop />
    </div>
  );
};
