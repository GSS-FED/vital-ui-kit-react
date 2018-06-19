// @flow

import * as React from 'react';
import styled from 'styled-components';
import {
  Column as BaseColumn,
  type ColumnProps,
  // $FlowFixMe
} from 'react-virtualized';
import defaultHeaderRenderer from './defaultHeaderRenderer';
import defaultCheckboxRenderer, {
  type CheckboxRenderer,
} from '../defaultCheckboxRenderer';

const StyledColumn = styled(BaseColumn)``;

type Props = {
  /** Checkbox renderer */
  checkboxRenderer?: CheckboxRenderer,
};

class Column extends React.Component<ColumnProps & Props> {
  static defaultProps = {
    ...BaseColumn.defaultProps,
    headerRenderer: defaultHeaderRenderer,
    checkboxRenderer: defaultCheckboxRenderer,
  };

  static HeaderRenderer = defaultHeaderRenderer;

  static propTypes = BaseColumn.propTypes;

  render() {
    return <StyledColumn {...this.props} />;
  }
}

export default Column;
