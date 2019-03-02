import React from 'react';
import VideoListItem from './video-list-item/script';

const VideoList = ({ videos }) => videos
  .map((video, index) => <VideoListItem key={ index } video={ video } /> );

export default VideoList;
