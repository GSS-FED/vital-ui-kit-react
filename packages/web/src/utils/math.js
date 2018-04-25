// @flow

export const trunTo = (value: string | number): string | number => {
  const number = Number(value);
  if (!Number.isNaN(number)) {
    return number > 99 ? '99+' : number;
  }
  return value;
}
