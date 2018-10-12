// https://stackoverflow.com/questions/33199959/how-to-detect-a-react-component-vs-a-react-element
import React from 'react';

export function isClassComponent(
  component: any,
): component is React.ComponentClass<any> {
  return typeof component === 'function' &&
    !!component.prototype.isReactComponent
    ? true
    : false;
}

export function isFunctionComponent(
  component: any,
): component is React.SFC<any> {
  return typeof component === 'function' &&
    String(component).includes('return React.createElement')
    ? true
    : false;
}

export function isReactComponent(
  component: any,
): component is React.ComponentType {
  return isClassComponent(component) || isFunctionComponent(component)
    ? true
    : false;
}

export function isElement(
  element: any,
): element is React.ReactElement<any> {
  return React.isValidElement(element);
}

export function isDOMTypeElement(element: any) {
  return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element: any) {
  return isElement(element) && typeof element.type === 'function';
}
