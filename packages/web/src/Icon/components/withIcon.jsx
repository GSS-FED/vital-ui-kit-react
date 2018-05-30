// @flow

import React, { Component, type ComponentType } from 'react';
import PropTypes from 'prop-types';

type Props = {
  icon: Object,
}

const withIcon = (WrappedComponent: ComponentType<*>) =>
  class Cp extends Component<Props> {
    static contextTypes = {
      // eslint-disable-next-line
      icon: PropTypes.object.isRequired
    };

    render() {
      const { icon } = this.context;

      return <WrappedComponent {...this.props} icon={icon} />;
    }
  };

export default withIcon;
