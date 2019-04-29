import axios from 'axios';

const KEY = 'waYhg0HWEgd0mZKFCcVJ9UHPimJjjb4t';

export default axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  params: {
    api_key: KEY,
    limit: 25
  }
});
