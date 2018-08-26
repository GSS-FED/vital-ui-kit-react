export const trunTo = (value: string | number): string | number => {
  const num = Number(value);
  if (!Number.isNaN(num)) {
    return num > 99 ? '99+' : num;
  }
  return value;
};
