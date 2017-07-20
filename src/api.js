import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

export default reduxApi({
  // complex endpoint description
  models: {
    url: `http://localhost:3000/v1/models`,
    // reimplement default `transformers.object`
    transformer: transformers.array,
    // base endpoint options `fetch(url, options)`
    options: {
      headers: {
        Accept: 'application/json',
      },
    },
  },
  describe: {
    url: `http://localhost:3000/v1/describe/:model`,
  },
}).use('fetch', adapterFetch(fetch)); // it's necessary to point using REST backend
