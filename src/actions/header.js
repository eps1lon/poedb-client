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

    const belongs_to = Object.keys(description.belongsTo).map(assoc => {
      return {
        Header: humanize(assoc),
        accessor: `${assoc}.row`,
      };
    });

    const many = Object.keys(description.belongsToMany).map(assoc => {
      return {
        Header: humanize(assoc),
        id: assoc,
        accessor: row => row[assoc].map(({ row }) => row).join(','),
      };
    });

    return [...many, ...header, ...belongs_to];
  }
};

export const displayHeader = model => {
  return {
    type: DISPLAY_HEADER,
    payload: { columns: buildHeader(model) },
  };
};
