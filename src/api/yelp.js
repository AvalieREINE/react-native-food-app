import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer tAy5IQguce74dyrjj_hK8FjpXLY6mWBrgo6YptkwA1D_3bDzr914dc4BHjuw_9xbfHzkOot4JIIbKhfsLz2ihxtGCcvidvVQe5z5PfkhzS7cga06Rfl7B5xEdiykYnYx'
  }
});