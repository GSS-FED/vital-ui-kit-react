// @flow

import React, { type Node, Component } from 'react';
import styled from 'styled-components';

import Caption from './Caption';

const Root = styled.table`
  width: 100%;
  text-align: ${props => props.textAlign || 'left'};

  thead {
    border-bottom: ${props => props.hasHorizontalBorder && `1px solid #D8E3F6`};

    ${props =>
      props.isResponsive &&
      `
      th {
        @media (max-width: 800px) {
          display: block;
          text-align: right;
        }
      }

      @media (max-width: 800px) {
        float: left;
        border: 0;
        border-right: 1px solid #D8E3F6;
        border-bottom: 1px solid #D8E3F6;
      }
    `};
  }

  th {
    color: #456297;
    padding: 0.6667rem 1.3333rem;
    border-right: ${props => props.hasVerticalBorder && `1px solid #D8E3F6`};

    &:last-child {
      border: 0;
    }
  }

  tbody {
    ${props =>
      props.isResponsive &&
      `
      @media (max-width: 800px) {
        display: block;
        width: auto;
        position: relative;
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
        }
    `};
    tr {
      transition: background-color 0.3s ease;

      ${props => props.isResponsive && `
      @media (max-width: 800px) {
        display: inline-block;
        font-size: 1rem;
        vertical-align: top;
        }
      `};

      ${props =>
        props.hasHightlight &&
        `
        &:hover {
          background-color: #D8E3F6;
        }
      `};

      ${props =>
        props.isStriped &&
        `
        &:nth-child(odd) {
          background-color: #F7F9FE;

          &:hover {
            background-color: #D8E3F6;
          }
        }
    `};
    }

    td {
      ${props => props.isResponsive && `
      @media (max-width: 800px) {
          display: block;
          text-align: right;
        }
      `};
    }
  }

  tr {
    border-bottom: ${props => props.hasHorizontalBorder && `1px solid #D8E3F6`};

    &:last-child {
      border: 0;
    }
  }

  td {
    padding: 0.6667rem 1.3333rem;
    color: #456297;
    border-right: ${props => props.hasVerticalBorder && `1px solid #D8E3F6`};
    &:last-child {
      border: 0;
    }
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
  textAlign?: 'left' | 'center' | 'right',
  hasHorizontalBorder?: boolean,
  hasVerticalBorder?: boolean,
  isStriped?: boolean,
  hasHightlight?: boolean,
  isResponsive?: boolean
};

class Table extends Component<Props, State> {
  static defaultProps = {
    isResponsive: false,
    hasHightLight: true,
  }

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
      <Root
        hasHorizontalBorder={this.props.hasHorizontalBorder}
        hasVerticalBorder={this.props.hasVerticalBorder}
        isStriped={this.props.isStriped}
        hasHightlight={this.props.hasHightlight}
        isResponsive={this.props.isResponsive}
        textAlign={this.props.textAlign}
      >
        {this.props.caption && this.renderCaption()}
        {/* TODO: define header components */}
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
