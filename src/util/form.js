/**
 * builds an object that can be passed to SequelizeModelInstance#find(where)
 * @param {object} form the form used in components/QueryInterface
 */
export const whereObjectBuilder = form => {
  return Object.entries(
    form,
  ).reduce((where, [attribute, { value, enabled }]) => {
    if (enabled) {
      // only a shallow copy, we might have a nested structure when using
      // operators. we only copy to make debugging slightly more convient
      // we are not mutating the value anyway
      return { ...where, [attribute]: value };
    } else {
      return where;
    }
  }, {});
};
