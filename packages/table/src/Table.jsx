// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
  Table as BaseTable
} from 'react-virtualized';
import 'react-virtualized/styles.css'

const StyledTable = styled(BaseTable)``;

class Table extends React.Component {
  render() {
    return (
      <StyledTable {...this.props}>{this.props.children}</StyledTable>
    );
  }
}

export default Table;
