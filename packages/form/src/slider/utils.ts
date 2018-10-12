/**
 * Clamp value between max and min
 */
export const clamp = (value: number, max: number, min: number) =>
  Math.min(Math.max(value, min), max);

/**
 * @name toFixed safeguard with negative support
 * @param fixed number to fixed =>
 * @return @param num
 */
export const toFixed = (fixed: number) => (num: number): number => {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  return parseFloat(num.toString().match(re)![0]);
};

export const noop = () => {};

/**
 * Count the nubmers of decimals from value
 * @param value number
 */
export const countDecimals = (value: number) => {
  if (value % 1 === 0) return 0;
  return value.toString().split('.')[1].length;
};
