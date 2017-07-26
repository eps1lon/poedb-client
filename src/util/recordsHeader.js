// @flow
import { humanize } from 'inflection';

export type OrderHierarchy = number[];
export type ColumnForHeader = {
  label: string,
  accessor: string | Function,
  $order: OrderHierarchy,
};

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

const intOrDefault = (val: any, def: number): number => {
  const cast = parseInt(val, 10);

  if (Number.isNaN(cast)) {
    return def;
  } else {
    return cast;
  }
};

export const isUnknown = (attribute_name: string): boolean =>
  /(Flag|Unknown|Data|Key|Keys)\d*$/i.test(attribute_name);

/**
 * order is 
 * -1, parseInt(orig_order, 10), unknown semantics, undefined, orig_order which is not castable to int
 * @param {string} name of the attribute 
 * @param {object} param1 props from the api describe endpoint
 * @return {Number} for a sort method
 */
const order = (name: string, column: AttributeDescription): OrderHierarchy => {
  const { orig_order } = column;
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

const buildHeader = (attributes: AttributeDescription[]): ColumnForHeader[] => {
  return attributes.map(description => {
    const { name } = description;
    return {
      accessor: name,
      label: humanize(name),
      $order: order(name, description),
    };
  });
};

const buildBelongsTo = (
  belongs_to: AssocDescription[] = [],
): ColumnForHeader[] => {
  return belongs_to.map(description => {
    const { name } = description;
    return {
      label: humanize(name),
      accessor: `${name}.row`,
      $order: order(name, description),
    };
  });
};

const buildMany = (many: AssocDescription[] = []): ColumnForHeader[] => {
  return many.map(description => {
    const { name } = description;
    return {
      label: humanize(name),
      id: name,
      accessor: row => {
        const associated = row[name];

        if (Array.isArray(associated)) {
          return associated.map(({ row }) => row).join(',');
        } else {
          console.warn(
            `there was no array given for habtm ${name} in row ${row.row}`,
          );
          return undefined;
        }
      },
      $order: order(name, description),
    };
  });
};

const recordsHeader = (description: ModelDescription): ColumnForHeader[] => {
  const { attributes, belongsTo, belongsToMany } = description;
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
