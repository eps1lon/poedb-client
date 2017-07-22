import React from 'react';
import { humanize } from 'inflection';

const buildHeader = (attributes = {}) => {
  return Object.keys(attributes).map(attribute => {
    return {
      accessor: attribute,
      Header: humanize(attribute),
    };
  });
};

const buildBelongsTo = (belongs_to = {}) => {
  return Object.keys(belongs_to).map(assoc => {
    return {
      Header: humanize(assoc),
      accessor: `${assoc}.row`,
    };
  });
};

const buildMany = (many = {}) => {
  return Object.keys(many).map(assoc => {
    return {
      Header: humanize(assoc),
      id: assoc,
      accessor: row => row[assoc].map(({ row }) => row).join(','),
    };
  });
};

/**
 * this is not actualy a component but since it has some jsx parts we keep it here
 * 
 * @param {Object} model api/describe/:model returnval 
 * @return a header from the currently queried model consumeable by react-table
 */
const recordsHeader = (
  { attributes, belongsTo, belongsToMany },
  show_columns,
) => {
  const header = buildHeader(attributes);
  const belongs_to = buildBelongsTo(belongsTo);
  const many = buildMany(belongsToMany);

  return [...belongs_to, ...many, ...header].map((column, i) => {
    return {
      ...column,
      show: show_columns[i],
    };
  });
};

export default recordsHeader;
