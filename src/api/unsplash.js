import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Xnli8BV565iAjVZqrBSuKW-xoLYFJM7nWs_0ZVvJANo'
  }
});
