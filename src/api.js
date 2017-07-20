import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

import { findAll } from './actions/records';

export default reduxApi({
  // complex endpoint description
  models: {
    url: `/models`,
    // reimplement default `transformers.object`
    transformer: transformers.array,
  },
  model: {
    url: `/describe/:model`,
    postfetch: [
      ({ dispatch }) => {
        dispatch(findAll());
      },
    ],
  },
  records: {
    url: `/find/:model`,
    transformer: data => (data ? data.result : []),
  },
})
  .use('fetch', adapterFetch(fetch))
  .use('rootUrl', 'http://localhost:3000/v1')
  .use('options', {
    headers: {
      Accept: 'application/json',
    },
  });
