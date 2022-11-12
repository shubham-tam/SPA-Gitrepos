import React, { useEffect } from "react";
import classes from "..//..//assets/style/home.module.css";
import upArrow from "..//..//assets/images/upArrow.png";

export default function GoToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={classes.goToTop}
      >
        <img src={upArrow} alt="Up arrow to go to the top" />
      </button>
    </>
  );
}
