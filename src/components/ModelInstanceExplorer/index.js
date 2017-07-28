import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  show: PropTypes.bool,
};

class ModelInstanceExplorer extends Component {
  render() {
    const { show } = this.props;

    return <div className={show ? 'visible' : 'hidden'}>Explorer</div>;
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default ModelInstanceExplorer;
