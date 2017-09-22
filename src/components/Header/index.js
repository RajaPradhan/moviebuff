import React from 'react';

import SearchBox from 'components/SearchBox';

import styles from './styles.scss';

const Header = () => (
  <nav className={styles['nav-bar']}>
    <div className="nav-wrapper">
      <div className="row">
        <div className="col s12 offset-m1 m2">
          <a href="#" className="brand-logo">
            MovieBuff
          </a>
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
      </div>
    </div>
</nav>
);

export default Header;
