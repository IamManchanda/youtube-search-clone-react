import React, { Fragment } from 'react';

const VideoDetail = ({ selectedVideo }) => {
  console.log({ selectedVideo })
  if (selectedVideo) {
    const { title: videoTitle } = selectedVideo.snippet;
    const { channelTitle: videoChannelTitle }  = selectedVideo.snippet;
    const { videoId } = selectedVideo.id;
    return <Fragment>
      <div className="radius bordered shadow card">
        <div className="card-section">
          <div className="responsive-embed widescreen">
            <iframe 
              title={ videoTitle } 
              src={ `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1` } 
              frameBorder="0" 
              allowFullScreen
            />
          </div>
          <h4>{ videoTitle }</h4>
          <h6>{ videoChannelTitle }</h6>
        </div>
      </div>
    </Fragment>;
  }
  return null;
}

VideoDetail.defaultProps = {
  selectedVideo: null,
};

export default VideoDetail;
