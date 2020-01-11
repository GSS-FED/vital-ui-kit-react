/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import abttf, { css as abttfcss } from 'astroturf';

const stylessss = abttfcss`
  @import '~./my.scss';
`;

function BButton({ children }: any): any {
  return <button className={stylessss.compo}>{children}</button>;
}

const AButton = abttf('button')`
  color: black;
  border: 1px solid black;
  background-color: white;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }

  &.color-green {
    color: green;
  }
`;

export function Test() {
  return (
    <>
      <BButton>A styled button</BButton>
      <AButton primary color="green">
        A styled button
      </AButton>
    </>
  );
}
