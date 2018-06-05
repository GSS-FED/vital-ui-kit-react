const colors = {
  purple: '#6C29A7',
  white: '#fff',
  blue: '#317DFF',
  dark: '#122031',
  orange: '#F5A623',
  red: '#D3348A',
  green: '#6AA22D',
  seablue: '#2394AB',
  grey: '#808999',
};

const tintColor = colors.blue;

export default {
  ...colors,
  tintColor,
  titleColor: '#595E67',
  fontColor: '#616874',
  tabIconDefault: colors.grey,
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: colors.red,
  errorText: '#fff',
  warningBackground: colors.orange,
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
};
