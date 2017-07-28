import React, { Component } from 'react';
import PropTypes from 'prop-types';

import toggleAble from '../ToggleAble';

import './index.css';

const propTypes = {
  data: PropTypes.object,
};

class ModelInstanceExplorer extends Component {
  render() {
    return <div className="model-instance-explorer">Explorer</div>;
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default toggleAble(ModelInstanceExplorer);
