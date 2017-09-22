import React from 'react';
import classNames from 'classnames';

import SideBar from '../SideBar';
import MainArea from '../MainArea';

import styles from './styles.scss';

const homeContainerClasses = classNames('row', styles['home-container']);

const Home = () => (
  <div className={homeContainerClasses}>
    <SideBar />
    <MainArea />
  </div>
);

export default Home;
