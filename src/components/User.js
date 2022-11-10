import React from "react";
import site from "..//assets/images/site.png";
import github from "..//assets/images/github.png";
import location from "..//assets/images/location.png";
import user from "..//assets/images/user.png";
import classes from "..//assets/style/user.module.css";
import picture from "..//../src/img.jpg";

export const User = () => {
  return (
    <div className="container">
      <div className={classes["user-information"]}>
        <div className={classes.image}>
          <img src={picture} alt="" />
        </div>
        <div className={classes["user-container"]}>
          <h3> Name of the user</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            labore expedita cupiditate esse, natus architecto in. Totam amet
            ratione neque, numquam, sequi magni eos, atque odit distinctio ipsam
            voluptatibus nemo.
          </p>
          <div className={classes["more-data"]}>
            <p>
              {" "}
              <img src={user} alt="" /> 20 Followers. Following 10
            </p>
            <p>
              {" "}
              <img src={location} alt="" /> Nepal
            </p>
            <p>
              {" "}
              <img src={site} alt="" /> .com
            </p>
            <p>
              {" "}
              <img src={github} alt="" /> View Github profile
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
