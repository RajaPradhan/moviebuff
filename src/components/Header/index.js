import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import SearchBox from "components/SearchBox";
import TabNav from "components/TabNav";

import logo from "images/logo.jpg";

import baseStyles from "containers/App/styles.scss";
import styles from "./styles.scss";

const Header = () => (
  <div>
    <nav className={classNames(styles["nav"])}>
      <div className="nav-wrapper">
        <div className="row">
          <div
            className={classNames(
              "col s12 offset-m1 m2",
              baseStyles["hide-on-small-to-med"]
            )}
          >
            <Link to="/" className="brand-logo">
              <img src={logo} alt="MovieBuff" />
            </Link>
          </div>
          <div className="col s12 m7">
            <SearchBox />
          </div>
          <div className="col m2">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    </nav>
    <TabNav />
  </div>
);

export default Header;
