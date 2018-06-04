// flow-typed signature: d869098d1e7c7ccd5477ac7f10a9148d
// flow-typed version: 8e2ca848b1/@storybook/addon-links_v3.x.x/flow_>=v0.53.x

declare module '@storybook/addon-links' {
  declare type LinkToFunction = (...args: Array<any>) => string;

  declare module.exports: {
    linkTo<T>(
      book: string | LinkToFunction,
      kind?: string | LinkToFunction
    ): SyntheticMouseEvent<T>,
    hrefTo(kind: string, story: string): Promise<string>,
  };
}

declare module '@storybook/addon-links/react' {
  declare type Props = {
    kind?: string,
    story?: string,
  };

  declare class LinkTo extends React$Component<Props> {}
  declare module.exports: typeof LinkTo;
}
