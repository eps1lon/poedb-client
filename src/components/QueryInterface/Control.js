import React from 'react';
import PropTypes from 'prop-types';
import { Control as FormControl } from 'react-redux-form';

const isFlag = type => type === 'tinyint(1)';
const isText = type => type === 'text';
const isDateTime = type => type === 'datetime';

const numberProps = type => {
  return {
    min: /.*unsigned$/.test(type) ? 0 : '',
  };
};

const Control = ({ type, ...props }) => {
  const normalized_type = type.toLowerCase();

  if (isText(normalized_type)) {
    return <FormControl.text {...props} />;
  } else if (isFlag(normalized_type)) {
    return <FormControl.checkbox {...props} />;
  } else if (isDateTime(normalized_type)) {
    const control_props = {
      ...props,
      type: 'datetime-local',
    };
    return <FormControl.input {...control_props} />;
  } else {
    const control_props = {
      ...props,
      ...numberProps(normalized_type),
      type: 'number',
    };

    return <FormControl.input {...control_props} />;
  }
};

Control.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Control;
