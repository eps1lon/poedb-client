import React from 'react';
import PropTypes from 'prop-types';
import { Control } from 'react-redux-form';

/**
 * TODO currently doesnt discriminate between operators
 * should it?
 * @param {string} type a sequelize attribute type
 * @return {value, human}[] 
 */
const operators = type => {
  return [
    { operator: '$eq', human: '=' },
    { operator: '$ne', human: '!=' },
    { operator: '$lt', human: '<' },
    { operator: '$lte', human: '<=' },
    { operator: '$gte', human: '>=' },
    { operator: '$gt', human: '>' },
    { operator: '$between', human: 'between' },
    { operator: '$notBetween', human: 'not between' },
    { operator: '$in', human: 'in' },
    { operator: '$notIn', human: 'not in' },
    { operator: '$like', human: 'like' },
    { operator: '$notLike', human: 'not like' },
  ];
};

const Operators = ({ type, model }) => {
  return (
    <Control.select model={model}>
      {operators(type).map(({ operator, human }) => {
        return (
          <option key={operator} value={operator}>
            {human}
          </option>
        );
      })}
    </Control.select>
  );
};

Operators.propTypes = {
  model: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Operators;
