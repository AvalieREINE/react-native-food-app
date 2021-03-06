import axios from "axios";
import {api} from '../.././api.json';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${api}`
  }
});