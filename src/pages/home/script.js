import React, { Fragment, Component } from 'react';
import SearchBar from '../../components/search-bar/script';
import VideoList from '../../components/video-list/script';
import VideoDetail from '../../components/video-detail/script';
import youtubeApi from '../../api/youtube';
import logo from '../../assets/logo.png';
import { topBarSpacing, menuImageContainer, frameBodySpacing } from './scoped.module.css';

const Home = class extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleFormSubmission = async (q) => {
    const response = await youtubeApi.get('/search', { params: { q } });
    const { items: videos  } = response.data;
    const [selectedVideo] = videos;
    console.log({ selectedVideo });
    this.setState({ videos, selectedVideo });
  };

  handleVideoSelection = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return <Fragment>
      <div className="grid-y medium-grid-frame">
        <div className="cell shrink header medium-cell-block-container">
          <div className={ `top-bar shadow ${topBarSpacing}`}>
            <div className="top-bar-left">
              <ul className="menu">
                <li className={ `menu-text ${menuImageContainer}` }>
                  <img src={logo} alt="YouTube Logo" titile="YouTube" />
                </li>
                <li>
                  <SearchBar 
                    onFormSubmit={ this.handleFormSubmission }
                    videosLength={ videos.length }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={ `cell medium-auto medium-cell-block-container ${frameBodySpacing}` }>
          <div className="grid-x grid-padding-x">
            <div className="cell medium-6 large-9 medium-cell-block-y">
              <VideoDetail selectedVideo={ selectedVideo } />
            </div>
            <div className="cell medium-6 large-3 medium-cell-block-y">
              <VideoList 
                videos={ videos }
                onVideoSelect={ this.handleVideoSelection }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
