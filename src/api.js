// @flow
import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

import { displayHeader } from './actions/header';
import { getDescription } from './selectors/model';

export type AttributeDescription = { orig_order: any, name: string };
export type AssocDescription = {
  name: string,
  target_name: string,
  orig_order: number,
};
export type ModelDescription = {
  attributes: AttributeDescription[],
  belongsTo: AssocDescription[],
  hasMany: AssocDescription[],
  belongsToMany: AssocDescription[],
};

const empty_model: ModelDescription = {
  attributes: [],
  belongsTo: [],
  belongsToMany: [],
  hasMany: [],
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
    postfetch: [
      ({ action, dispatch, getState }) => {
        dispatch(displayHeader(getDescription(getState())));
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
