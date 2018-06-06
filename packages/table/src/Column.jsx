// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Column as BaseColumn, ColumnProps } from 'react-virtualized';

class Column extends React.Component<ColumnProps> {
  render() {
    return <BaseColumn {...this.props} />;
  }
}

export default Column;
