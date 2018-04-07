const primaryList = [
  '#F7F9FE',
  '#EEF2FC',
  '#D8E3F6',
  '#C4D2EB',
  '#95ACD4',
  '#7189B6',
  '#456297',
  '#2A487F',
  '#1E3768',
];
const secondaryList = [
  '#D9ECFF',
  '#A6D2FF',
  '#73B9FE',
  '#419FFE',
  '#0E86FE',
  '#016DD8',
  '#0153A5',
  '#003A73',
  '#002040',
];
const blackList = [
  '#F8F8F8',
  '#F0F0F0',
  '#dddddd',
  '#cccccc',
  '#aaaaaa',
  '#888888',
  '#555555',
  '#333333',
  '#0D0D0D',
];

module.exports = {
  // color template
  primaryList,
  secondaryList,
  primaryList1: primaryList[0],
  primaryList4: primaryList[3],
  primaryList7: primaryList[6],

  // b & w
  black: blackList[8],
  grayDark: blackList[6],
  gray: blackList[4],
  grayLight: blackList[2],
  white: '#ffffff',

  // ui colors
  primary: secondaryList[4],
  info: '#00C3FF',
  success: '#2BCD86',
  alarm: '#EB5000',
  warning: '#FFB400',
  stable: blackList[4],
};
