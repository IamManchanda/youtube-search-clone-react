import React from 'react';
import VideoListItem from './video-list-item/script';

const VideoList = ({ videos }) => videos
  .map((video) => <VideoListItem video={ video } key={ video.etag } /> );

VideoList.defaultProps = {
  videos: [],
};

export default VideoList;
