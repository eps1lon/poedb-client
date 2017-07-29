import { singularize } from 'inflection';
import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

const empty_model = {
  attributes: {},
  belongsTo: {},
  belongsToMayn: {},
  hasMany: {},
};

export const MODEL_NAME = Symbol('model name ident');

const mapModelNames = ({ result, description }, root_name) => {
  for (const [attr, { target_name }] of [
    ...Object.entries(description['belongsTo']),
    ...Object.entries(description['belongsToMany']),
  ]) {
    if (result[attr]) {
      result[attr][MODEL_NAME] = target_name;
    }
  }

  result[MODEL_NAME] = root_name;

  return result;
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
    transformer: (data, prev_data, action) =>
      data
        ? {
            result: data.result.map(row => ({
              ...row,
              [MODEL_NAME]: singularize(action.request.pathvars.model),
            })),
            pages: data.pages,
          }
        : { result: [], pages: -1 },
  },
  record: {
    url: '/find/:model/:id?withDescription',
    transformer: (data, prev_data, action) =>
      data ? mapModelNames(data, action.request.pathvars.model) : {},
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
