import React, { useEffect } from "react";
import classes from "..//..//assets/style/home.module.css";

export default function GoToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={classes.goToTop}
      >
        Go to top
      </button>
    </div>
  );
}
