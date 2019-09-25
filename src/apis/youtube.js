import axios from 'axios';

const KEY = 'AIzaSyBWva9CqgCQ8yUicotOdvTF6a9JuNqoFR8';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
