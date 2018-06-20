// @flow

import React, {
  Component,
  type ComponentType,
  type ElementConfig,
} from 'react';

const getComponentName = (target: any): string => {
  if (target.displayName && typeof target.displayName === 'string') {
    return target.displayName;
  }

  return target.name || 'Component';
};

const warningMessage = (message: string) => {
  // eslint-disable-next-line no-console
  console.warn(`@vital-ui/react: ${message}`);
};

export default function withDeprecationWarnings<
  InnerComponent: ComponentType<any>,
>(
  WrappedComponent: InnerComponent,
  props: { message: ?string },
): ComponentType<ElementConfig<InnerComponent>> {
  return class WithDeprecationWarnings extends Component<
    $ReadOnly<any>,
  > {
    static displayName = `WithDeprecationWarnings(${getComponentName(
      WrappedComponent,
    )})`;

    componentWillMount() {
      warningMessage(
        // $FlowFixMe
        props.message || WithDeprecationWarnings.displayName,
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
