import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

const empty_model = {
  attributes: {},
  belongsTo: {},
  belongsToMayn: {},
  hasMany: {},
};

/**
 * api endpoints
 * 
 * usage of pre/postfetch is discourage. the api should have no dependencies to
 * the store for easier reuse in other redux stores
 * 
 * for prefetch you could wrap a thunk action around the api call
 * for postfetch you could use redux-saga
 */
export default reduxApi({
  // complex endpoint description
  models: {
    url: `/models`,
    // reimplement default `transformers.object`
    transformer: transformers.array,
  },
  model: {
    url: `/describe/:model`,
    transformer: data => (data ? data.description : empty_model),
  },
  records: {
    url: `/find/:model/`,
    transformer: data => (data ? data : { result: [], pages: -1 }),
  },
  record: {
    url: '/find/:model/:id',
    transformer: data => (data ? data.result : {}),
  },
})
  .use('fetch', adapterFetch(fetch))
  .use('rootUrl', 'http://localhost:3000/')
  .use('options', {
    headers: {
      Accept: 'application/json',
      'Accept-Version': '~1.0',
    },
  });
