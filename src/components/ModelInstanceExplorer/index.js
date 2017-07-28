import React, { Component } from 'react';
import PropTypes from 'prop-types';

import toggleAble from '../ToggleAble';

const propTypes = {
  data: PropTypes.object,
};

class ModelInstanceExplorer extends Component {
  render() {
    return <div>Explorer</div>;
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default toggleAble(ModelInstanceExplorer);
