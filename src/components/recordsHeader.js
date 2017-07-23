import { humanize } from 'inflection';

const intOrDefault = (val, def) => {
  const cast = parseInt(val, 10);

  if (Number.isNaN(cast)) {
    return def;
  } else {
    return cast;
  }
};

/**
 * order is 
 * -1, parseInt(orig_order, 10), unknown semantics, undefined, orig_order which is not castable to int
 * @param {string} name of the attribute 
 * @param {object} param1 props from the api describe endpoint
 * @return {Number} for a sort method
 */
const order = (name, { orig_order }) => {
  const END = Number.MAX_SAFE_INTEGER;

  // determine first group order
  // -1 should be reserved for primary keys so first value
  const order = [];
  if (orig_order === -1) {
    order.push(0);
    // nothing defined so put to the end
  } else if (orig_order === undefined) {
    order.push(END);
    // those are attributes whose semantics are unknown
  } else if (/(Flag|Unknown|Data|Key|Keys)\d*$/i.test(name)) {
    order.push(END - 1);
  } else {
    order.push(intOrDefault(orig_order, Number.POSITIVE_INFINITY));
  }

  // secondary order, mainly to preserve the orig order
  // unknown semantic attributes or composite primaries
  order.push(intOrDefault(orig_order, END));

  return order;
};

const buildHeader = (attributes = {}) => {
  return Object.keys(attributes).map(attribute => {
    return {
      accessor: attribute,
      Header: humanize(attribute),
      $order: order(attribute, attributes[attribute]),
    };
  });
};

const buildBelongsTo = (belongs_to = {}) => {
  return Object.keys(belongs_to).map(assoc => {
    return {
      Header: humanize(assoc),
      accessor: `${assoc}.row`,
      $order: order(assoc, belongs_to[assoc]),
    };
  });
};

const buildMany = (many = {}) => {
  return Object.keys(many).map(assoc => {
    return {
      Header: humanize(assoc),
      id: assoc,
      accessor: row => row[assoc].map(({ row }) => row).join(','),
      $order: order(assoc, many[assoc]),
    };
  });
};

/**
 * this is not actualy a component but since it has (or rather can have)
 * some jsx parts we keep it here
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

  return (
    [...belongs_to, ...many, ...header]
      .map((column, i) => {
        return {
          ...column,
          Header: `${column.Header}(${column.$order})`,
          show: show_columns[i],
        };
      })
      // sortBy order[0], order[1]
      .sort((a, b) => {
        if (a.$order[0] == b.$order[0]) {
          return a.$order[1] - b.$order[1];
        } else {
          return a.$order[0] - b.$order[0];
        }
      })
  );
};

export default recordsHeader;
