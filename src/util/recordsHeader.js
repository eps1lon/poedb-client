import { humanize } from 'inflection';

const intOrDefault = (val, def) => {
  const cast = parseInt(val, 10);

  if (Number.isNaN(cast)) {
    return def;
  } else {
    return cast;
  }
};

export const isUnknown = attribute_name =>
  /(Flag|Unknown|Data|Key|Keys|Index)\d*$/i.test(attribute_name);

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
  } else if (isUnknown(name)) {
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
  return Object.entries(attributes).map(([name, props]) => {
    return {
      accessor: name,
      label: humanize(name),
      $order: order(name, props),
    };
  });
};

const buildBelongsTo = (belongs_to = {}) => {
  return Object.keys(belongs_to).map(assoc => {
    return {
      label: humanize(assoc),
      accessor: `${assoc}.row`,
      $order: order(assoc, belongs_to[assoc]),
    };
  });
};

const buildMany = (many = {}) => {
  return Object.keys(many).map(assoc => {
    return {
      label: humanize(assoc),
      id: assoc,
      accessor: row => {
        const associated = row[assoc];

        if (Array.isArray(associated)) {
          return associated.map(({ row }) => row).join(',');
        } else {
          console.warn(
            `there was no array given for habtm ${assoc} in row ${row.row}`,
          );
          return undefined;
        }
      },
      $order: order(assoc, many[assoc]),
    };
  });
};

/**
 * @param {Object} model api/describe/:model returnval 
 * @return a header from the currently queried model
 */
const recordsHeader = ({ attributes, belongsTo, belongsToMany }) => {
  const header = buildHeader(attributes);
  const belongs_to = buildBelongsTo(belongsTo);
  const many = buildMany(belongsToMany);

  return (
    [...belongs_to, ...many, ...header]
      // sortBy order[0], order[1]
      .sort((a, b) => {
        if (a.$order[0] === b.$order[0]) {
          return a.$order[1] - b.$order[1];
        } else {
          return a.$order[0] - b.$order[0];
        }
      })
  );
};

export default recordsHeader;
