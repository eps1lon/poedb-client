import { humanize } from 'inflection';

export const DISPLAY_HEADER = 'DISPLAY_HEADER';

/**
 * eturns a header from the currently queried model consumeable by react-table
 * @param {Object} description api/describe/:model returnval 
 */
const buildHeader = description => {
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

export const displayHeader = model => {
  return {
    type: DISPLAY_HEADER,
    payload: { columns: buildHeader(model) },
  };
};
