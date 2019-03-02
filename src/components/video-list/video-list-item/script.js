import React, { Fragment } from 'react';

const VideoListItem = ({ video }) => {
  const { title: videoTitle } = video.snippet;
  const { url: videoThumbnail } = video.snippet.thumbnails.medium;
  const { channelTitle: videoChannelTitle }  = video.snippet;
  const { description: videoDescription } = video.snippet;
  return <Fragment>
    <a>
      <div className="radius bordered shadow card">
        <img src={ videoThumbnail } alt={ videoTitle } />
        <div className="card-divider">
          { videoChannelTitle }
        </div>
        <div className="card-section">
        <h5>{ videoTitle }</h5>
        <p>{ videoDescription }</p>
        </div>
      </div>
    </a>
    { console.log({ video }) }
  </Fragment>;
};

VideoListItem.defaultProps = {
  video: {},
};

export default VideoListItem;
