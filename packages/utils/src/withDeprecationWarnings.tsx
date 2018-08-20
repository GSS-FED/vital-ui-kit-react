import React from 'react';

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

export default function withDeprecationWarnings<T = {}>(
  WrappedComponent: React.ComponentType<T>,
  props: { message?: string },
) {
  return class WithDeprecationWarnings extends React.Component<T> {
    static displayName = `WithDeprecationWarnings(${getComponentName(
      WrappedComponent,
    )})`;

    componentDidMount() {
      warningMessage(
        props.message || WithDeprecationWarnings.displayName,
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
