/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';

import { StyledTable } from './styled';
import Caption from './TableCaption';
import Header from './TableHeader';

type State = {
  headers: Array<string>,
  columnProps: Array<Object>
};

type Props = {
  data: Array<Object>,
  children: React.Node,
  caption: React.Node,
  textAlign?: 'left' | 'center' | 'right',
  hasHorizontalBorder?: boolean,
  hasVerticalBorder?: boolean,
  isStriped?: boolean,
  hasHightlight?: boolean,
  isResponsive?: boolean,
  renderHeader?: (props: State) => React.Element<HTMLElement>
};

/**
 * @render react
 * @name Table
 * @description Vital Table
 */
class Table extends React.Component<Props, State> {
  static defaultProps = {
    isResponsive: false,
    hasHightlight: true,
    headers: null,
    textAlign: 'center',
    hasHorizontalBorder: false,
    hasVerticalBorder: false,
    isStriped: false,
    renderHeader: () => {}
  };

  state = {
    headers: Object.keys(this.props.data[0]),
    columnProps: []
  };

  componentDidMount() {
    this.parseData();
    if (this.props.children) {
      this.columnConfigue();
    }
  }

  renderCaption = () => {
    if (
      typeof this.props.caption === 'string' ||
      this.props.caption instanceof String
    ) {
      return (
        <Caption>
          {this.props.caption}
        </Caption>
);
    }
    return this.props.caption;
  };

  parseData = () => {
    this.setState({
      headers: this.getHeaders()
    });
  };

  getHeaders = () =>
    this.props.data
      .map(data => Object.keys(data))
      .reduce((prev, curr) => [...new Set([...prev, ...curr])]);

  columnConfigue = () => {
    const columnProps = React.Children.map(
      this.props.children,
      child => {
        if (child.type.name === 'TableColumn') {
          return child.props;
        }
        return null;
      }
    );

    this.setState({
      columnProps
    });
  };

  renderHeader = () => {
    const props = {
      columnProps: this.state.columnProps,
      headers: this.state.headers
    };
    return this.props.renderHeader ? (
      this.props.renderHeader(props)
    ) : (
      <Header {...props} />
    );
  };

  render() {
    // TODO: Find why rerender twice at start
    // console.log('rerender');
    return (
      <StyledTable
        hasHorizontalBorder={this.props.hasHorizontalBorder}
        hasVerticalBorder={this.props.hasVerticalBorder}
        isStriped={this.props.isStriped}
        hasHightlight={this.props.hasHightlight}
        isResponsive={this.props.isResponsive}
        textAlign={this.props.textAlign}
      >
        {this.props.caption && this.renderCaption()}
        {this.renderHeader()}
        <tbody>
          {this.props.data.map((dataset, i) => {
            const datamap = new Map(Object.entries(dataset));
            return (
              <tr key={dataset.id || i}>
                {this.state.headers.map((header, index) => {
                  if (datamap.has(header)) {
                    const props = this.state.columnProps.find(
                      column => header === column.field
                    );
                    return (
                      <td key={`${index}${header}`} {...props}>
                        {String(datamap.get(header))}
                      </td>
                    );
                  }
                  return <td key={index} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }
}

export default Table;
