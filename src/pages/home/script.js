import React, { Fragment, Component } from 'react';
import SearchBar from '../../components/search-bar/script';
import youtubeApi from '../../api/youtube';
import logo from '../../assets/logo.png';
import { topBarSpacing, menuImageContainer } from './scoped.module.css';

const Home = class extends Component {
  handleFormSubmit = (searchTerm) => {
    youtubeApi.get('/search', { params: { q: searchTerm } });
  };

  render() {
    return <Fragment>
      <div className={ `top-bar shadow ${topBarSpacing}`}>
        <div className="top-bar-left">
          <ul className="menu">
            <li className={ `menu-text ${menuImageContainer}` }>
              <img src={logo} alt="YouTube Logo" titile="YouTube" />
            </li>
            <li><SearchBar onFormSubmit={ this.handleFormSubmit } /></li>
          </ul>
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
