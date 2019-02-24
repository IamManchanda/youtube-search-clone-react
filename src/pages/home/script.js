import React, { Fragment, Component } from 'react';
import SearchBar from '../../components/search-bar/script';
import logo from '../../assets/logo.png';
import { topBarSpacing, menuImageContainer } from './scoped.module.css';

const Home = class extends Component {
  render() {
    return <Fragment>
      <div className={ `top-bar shadow ${topBarSpacing}`}>
        <div className="top-bar-left">
          <ul className="menu">
            <li className={ `menu-text ${menuImageContainer}` }>
              <img src={logo} alt="YouTube Logo" titile="YouTube" />
            </li>
            <li><SearchBar /></li>
          </ul>
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
