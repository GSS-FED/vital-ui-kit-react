export type Space = {
  margin?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginTop?: string,
  marginHorizontal?: string,
  marginVertical?: string,
  paddingHorizontal?: string,
  paddingVertical?: string,
  padding?: string,
  paddingTop?: string,
  paddingLeft?: string,
  paddingRight?: string,
  paddingBottom?: string
};

export type Flex = {
  flex?: any,
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit',
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit',
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit'
};

export const space = (props: Space) => ({
  margin: props.margin || '',
  marginBottom: props.marginBottom || '',
  marginLeft: props.marginLeft || '',
  marginTop: props.marginTop || '',
  marginHorizontal: props.marginHorizontal || '',
  marginVertical: props.marginVertical || '',
  paddingHorizontal: props.paddingHorizontal || '',
  paddingVertical: props.paddingVertical || '',
  padding: props.padding || '',
  paddingTop: props.paddingTop || '',
  paddingLeft: props.paddingLeft || '',
  paddingRight: props.paddingRight || '',
  paddingBottom: props.paddingBottom || ''
});

export const flex = (props: Flex) => ({
  flex: props.flex || '',
  flexDirection: props.flexDirection || '',
  justifyContent: props.justifyContent || '',
  alignItems: props.alignItems || ''
});
