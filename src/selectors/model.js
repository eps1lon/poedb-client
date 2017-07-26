import _ from 'lodash';

export const selectedModelName = state => state.model_selector.model;

export const getDescription = state => state.model.data;

/**
 * @param {state} redux state 
 * @return current number of existing cols in the table (shown and hidden!)
 */
export const colCount = state => {
  const { attributes, belongsTo, belongsToMany } = state.model.data;
  return _.sum(
    [attributes, belongsTo, belongsToMany].map(
      collection => (Array.isArray(collection) ? collection.length : 0),
    ),
  );
};
