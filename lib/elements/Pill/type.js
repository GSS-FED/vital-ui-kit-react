export type PillType = {
  current?: boolean,
  text?: string,
  badge?: string,
};

export type PillGroupType = {
  items: Array<PillType>,
  vertical?: boolean,
}
