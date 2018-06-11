// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
  Column as BaseColumn,
  ColumnProps,
  // $FlowFixMe
} from 'react-virtualized';
import defaultHeaderRenderer from './defaultHeaderRenderer';

const StyledColumn = styled(BaseColumn)``;

class Column extends React.Component<ColumnProps> {
  static defaultProps = {
    ...BaseColumn.defaultProps,
    headerRenderer: defaultHeaderRenderer,
  };

  static HeaderRenderer = defaultHeaderRenderer;
  
  static propTypes = BaseColumn.propTypes; 

  render() {
    return <StyledColumn {...this.props} />;
  }
}

export default Column;
