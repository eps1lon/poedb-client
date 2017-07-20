import { humanize } from 'inflection';

export const selectedModelName = state => state.model_selector.model;

export const getDescription = state => state.model.data.description;

// returns a header from the currently queried model consumeable by react-table
export const buildHeader = state => {
  const description = getDescription(state);

  if (description === undefined) {
    return [];
  } else {
    const header = Object.keys(description.attributes).map(attribute => {
      return {
        accessor: attribute,
        Header: humanize(attribute),
      };
    });

    return header;
  }
};
