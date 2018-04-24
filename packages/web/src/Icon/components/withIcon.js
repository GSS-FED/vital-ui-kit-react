// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withIcon = WrappedComponent =>
  class Cp extends Component {
    static contextTypes = {
      icon: PropTypes.object.isRequired
    };

    render() {
      const { icon } = this.context;

      return <WrappedComponent {...this.props} icon={icon} />;
    }
  };

export default withIcon;
