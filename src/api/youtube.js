/* Youtube API */

import axios from 'axios';

const API_KEY = 'AIzaSyDoSvfykhzw-7w2BJxCqVtTN1bPSeG39bM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});
