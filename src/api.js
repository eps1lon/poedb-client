import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

import { displayHeader } from './actions/header';
import { getDescription } from './selectors/model';

const empty_model = {
  attributes: {},
  belongsTo: {},
  belongsToMayn: {},
  hasMany: {},
};

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
    url: `/find/:model`,
    transformer: data => (data ? data : { result: [], pages: -1 }),
    prefetch: [
      ({ action, dispatch, getState }, next) => {
        dispatch(displayHeader(getDescription(getState())));

        next();
      },
    ],
  },
})
  .use('fetch', adapterFetch(fetch))
  .use('rootUrl', 'http://localhost:3000/v1')
  .use('options', {
    headers: {
      Accept: 'application/json',
    },
  });
