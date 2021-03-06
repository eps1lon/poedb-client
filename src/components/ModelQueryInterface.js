import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QueryInterface from './QueryInterface/';

class ModelQueryInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  handleSubmit(form) {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(form);
    }
  }

  toggleVisible() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { loading, query_interface } = this.props;
    const { visible } = this.state;

    const handleSubmit = this.handleSubmit.bind(this);
    const toggleVisible = this.toggleVisible.bind(this);

    return (
      <fieldset className={loading ? 'loading' : ''}>
        <legend>
          search<button onClick={toggleVisible}>{visible ? '-' : '+'}</button>
        </legend>
        <div className={visible ? 'visible' : 'hidden'}>
          <QueryInterface attributes={query_interface.attributes} />
        </div>
        <button onClick={handleSubmit}>search</button>
      </fieldset>
    );
  }
}

ModelQueryInterface.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  query_interface: PropTypes.object,
};

export default ModelQueryInterface;
