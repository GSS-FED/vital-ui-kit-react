import React from 'react';
import { isElement, isReactComponent } from '../is';

export const render = (
  Node: any,
  Wrapper = React.Fragment,
  props,
) => {
  if (isElement(Node)) {
    return <Wrapper {...props}>{Node}</Wrapper>;
  }
  if (typeof Node === 'function') {
    return Node(props);
  }
  if (isReactComponent(Node)) {
    return React.createElement(Node, props);
  }
  return Node;
};
