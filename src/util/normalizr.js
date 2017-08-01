import _ from 'lodash';

const findSchema = (key, schemas) =>
  Object.values(schemas).find(schema => schema.key === key);

export const links = (entities, schemas) => {
  return _.flattenDeep(
    // loop over entities |entities| <= |schemas|
    Object.entries(entities).map(([key, entries]) => {
      const schema = findSchema(key, schemas);

      return Object.entries(entries).map(([id, entry]) => {
        return Object.entries(
          schema.schema,
        ).map(([attribute, target_schema]) => {
          return {
            source: { key: schema.key, id },
            target: { key: target_schema.key, id: entry[attribute] },
          };
        });
      });
    }),
  );
};
