import React, { Fragment, Component } from 'react';
import SearchBar from '../../components/search-bar/script';
import VideoList from '../../components/video-list/script';
import youtubeApi from '../../api/youtube';
import logo from '../../assets/logo.png';
import { topBarSpacing, menuImageContainer } from './scoped.module.css';

const Home = class extends Component {
  state = {
    videos: [],
  };

  handleFormSubmit = async (searchTermReceived) => {
    const response = await youtubeApi.get('/search', { params: { q: searchTermReceived } });
    const { items: videos  } = response.data;
    this.setState({ videos });
  };

  render() {
    const { videos } = this.state;
    return <Fragment>
      <div className="grid-y medium-grid-frame">
        <div className="cell shrink header medium-cell-block-container">
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
        </div>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell medium-8 large-9 medium-cell-block-y">
            </div>
            <div className="cell medium-4 large-3 medium-cell-block-y">
              <VideoList videos={ videos } />
            </div>
          </div>
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
