import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import site from "..//assets/images/site.png";
import github from "..//assets/images/github.png";
import location from "..//assets/images/location.png";
import user from "..//assets/images/user.png";
import classes from "..//assets/style/user.module.css";
// import picture from "..//../src/img.jpg";
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
        // setUserInfo(res[0].data);
        // setRepos(res[1].data);

        console.log(res[0].data);
        console.log(res[1].data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInformation();
  }, []);

  return (
    <div className="container">
      <Link to="/" className={classes.back}>
        Back
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
              <img src={user} alt="" />
              {userInfo?.followers} Followers. Following {userInfo?.following}
            </p>

            {userInfo?.location && (
              <p>
                <img src={location} alt="" />
                {userInfo?.location}
              </p>
            )}
            {userInfo?.blog && (
              <p>
                <img src={site} alt="" />

                <a href={userInfo?.blog}>Visit ${userInfo?.login}'s site </a>
              </p>
            )}
            <p>
              {" "}
              <img src={github} alt="" />
              <a href={userInfo?.html_url}>View GitHub Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["user-repos"]}>
        <div className={classes.repo}>
          <h3>Name of the repo</h3>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            quas rerum fugiat molestiae quis suscipit, beatae minima? Non,
            accusantium officia laudantium inventore voluptate eum similique
            incidunt, ullam architecto, aut ad.
          </p>
          <small> Written in xyz language</small>
        </div>
      </div>
    </div>
  );
};
