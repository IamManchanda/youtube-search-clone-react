import React, { Fragment } from 'react';
import { cardContainer } from './scoped.module.css';

const VideoListItem = ({ video, onVideoSelect }) => {
  const { title: videoTitle } = video.snippet;
  const { url: videoThumbnail } = video.snippet.thumbnails.medium;
  const { channelTitle: videoChannelTitle }  = video.snippet;
  const { description: videoDescription } = video.snippet;
  return <Fragment>
    <div 
      className={ `radius bordered shadow card ${cardContainer}` }
      onClick={ () => onVideoSelect(video) }>
      <img src={ videoThumbnail } alt={ videoTitle } />
      <div className="card-divider">
        <strong>{ videoChannelTitle }</strong>
      </div>
      <div className="card-section">
      <h5>{ videoTitle }</h5>
      <p>{ videoDescription }</p>
      </div>
    </div>
  </Fragment>;
};

VideoListItem.defaultProps = {
  video: null,
  onVideoSelect: null,
};

export default VideoListItem;
