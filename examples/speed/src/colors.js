const primaryList = [
  '#F7F9FE', // 0
  '#EEF2FC', // 1
  '#D8E3F6', // 2
  '#C4D2EB', // 3
  '#95ACD4', // 4
  '#7189B6', // 5
  '#456297', // 6
  '#2A487F', // 7
  '#1E3768', // 8
];
const secondaryList = [
  '#D9ECFF', // 0
  '#A6D2FF', // 1
  '#73B9FE', // 2
  '#419FFE', // 3
  '#0E86FE', // 4
  '#016DD8', // 5
  '#0153A5', // 6
  '#003A73', // 7
  '#002040', // 8
];
const blackList = [
  '#F8F8F8', // 0
  '#F0F0F0', // 1
  '#dddddd', // 2
  '#cccccc', // 3
  '#aaaaaa', // 4
  '#888888', // 5
  '#555555', // 6
  '#333333', // 7
  '#0D0D0D', // 8
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
