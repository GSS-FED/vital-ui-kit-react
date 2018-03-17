// @flow

import React, { type Node, Component } from 'react';
import styled from 'styled-components';

import Caption from './Caption';

const Root = styled.table`
  width: 100%;
  text-align: ${props => props.textAlign || 'left'};

  thead {
  }

  th {
    color: #456297;
    padding: 0.6667rem 1.3333rem;
  }

  td {
    padding: 0.6667rem 1.3333rem;
    color: #456297;
  }
`;

type State = {
  headers: Array<string>,
  columnProps: Array<Object>
};

type Props = {
  data: Array<Object>,
  children: Node,
  caption: Node,
  textAlign?: 'left' | 'center' | 'right'
};

class Table extends Component<Props, State> {
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
      return <Caption>{this.props.caption}</Caption>;
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
    const columnProps = React.Children.map(this.props.children, child => {
      if (child.type.name === 'TableColumn') {
        return child.props;
      }
      return null;
    });

    this.setState({
      columnProps
    });
  };

  render() {
    // TODO: Find why rerender twice at start
    // console.log('rerender');
    return (
      <Root textAlign={this.props.textAlign}>
        {this.props.caption && this.renderCaption()}
        <thead>
          <tr>
            {this.state.headers.map((title, i) => {
              const props = this.state.columnProps.find(
                column => title === column.field
              );
              if (props) {
                return (
                  <th key={title || i} className={props.className}>
                    {props.title}
                  </th>
                );
              }
              return <th key={title || i}>{title}</th>;
            })}
          </tr>
        </thead>
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
      </Root>
    );
  }
}

export default Table;
