/* Youtube API */

import axios from 'axios';

const API_KEY = 'AIzaSyDoSvfykhzw-7w2BJxCqVtTN1bPSeG39bM';

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: API_KEY,
  },
});

export default youtubeApi;
