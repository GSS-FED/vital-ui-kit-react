import React from "react";
import styled from "styled-components";

const Root = styled.thead``;

type Props = {
  headers: Array<String>,
  columnProps?: Array<{
    title?: string,
    className?: string,
    field: string
  }>
};

const TableHeader = ({ headers, columnProps }: Props) => (
  <Root>
    <table>
    <colgroup  role={'presentation'}>
    </colgroup>
      <tbody>
      <tr>
        {headers.map((title, i) => {
          const props = columnProps.find(column => title === column.field);
          if (props) {
            return (
              <th key={title || i} className={props.className}>
                {props.title ? props.title : title}
              </th>
            );
          }
          return <th key={title || i}>{title}</th>;
        })}
      </tr>
      </tbody>
    </table>
  </Root>
);

export default TableHeader;
