export const allowed_operators = [
  '$eq',
  '$ne',
  '$lt',
  '$lte',
  '$gte',
  '$gt',
  '$between',
  '$notBetween',
  '$in',
  '$notIn',
  '$like',
  '$notLike',
];

const parseBetween = value => {
  return value.toString().split(' ').slice(0, 2);
};

const parseIn = value => {
  return value.toString().split(',');
};

const parseLike = value => {
  return value.toString();
};

const parseValue = (operator, value) => {
  if (['$between', '$notBetween'].includes(operator)) {
    return parseBetween(value);
  } else if (['$in', '$notIn'].includes(operator)) {
    return parseIn(value);
  } else if (['$like', '$notLike'].includes(operator)) {
    return parseLike(value);
  } else {
    return value;
  }
};

/**
 * builds a value that can be used in a where object 
 * @param {Object} model the model value from a QueryInterfaceOperator 
 */
export const valueForWhere = (operator, value) => {
  if (!allowed_operators.includes(operator)) {
    throw new Error(`unrecognized operator ${operator}`);
  }

  return { [operator]: parseValue(operator, value) };
};

/**
 * builds an object that can be passed to SequelizeModelInstance#find(where)
 * @param {object} form the form used in components/QueryInterface
 */
export const whereObjectBuilder = form => {
  return Object.entries(
    form,
  ).reduce((where, [attribute, { value, enabled, operator }]) => {
    if (enabled) {
      // only a shallow copy, we might have a nested structure when using
      // operators. we only copy to make debugging slightly more convient
      // we are not mutating the value anyway
      return { ...where, [attribute]: valueForWhere(operator, value) };
    } else {
      return where;
    }
  }, {});
};
