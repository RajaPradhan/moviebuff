import React from "react";
import classNames from "classnames";

import baseStyles from "containers/App/styles.scss";
import styles from "./styles.scss";

const TabNav = () => {
  return (
    <div
      className={classNames(
        "row",
        baseStyles["hide-on-med-and-above"],
        styles["tabs-container"]
      )}
      style={{ color: "#fff" }}
    >
      <div className="col s12">
        <ul className={styles.tabs}>
          <li className={styles.tab}>Currently Running</li>
          <li className={styles.tab}>Most Polular</li>
          <li className={styles.tab}>Recent Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default TabNav;
