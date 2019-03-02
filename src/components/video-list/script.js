import React from 'react';
import VideoListItem from './video-list-item/script';

const VideoList = ({ videos, onVideoSelect }) => videos
  .map((video) => <VideoListItem 
    key={ video.etag } 
    video={ video }
    onVideoSelect={ onVideoSelect }
  /> );

VideoList.defaultProps = {
  videos: [],
  onVideoSelect: () => {},
};

export default VideoList;
