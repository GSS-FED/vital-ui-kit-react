// @flow
import { rgba, lighten } from 'polished';

// color palette
export const primary100 = '#D9ECFF';
export const primary200 = '#A6D2FF';
export const primary300 = '#73B9FE';
export const primary400 = '#419FFE';
export const primary500 = '#0E86FE';
export const primary600 = '#016DD8';
export const primary700 = '#0153A5';
export const primary800 = '#003A73';
export const primary900 = '#002040';

export const secondary100 = '#F7F9FE';
export const secondary200 = '#EEF2FC';
export const secondary300 = '#D8E3F6';
export const secondary400 = '#C4D2EB';
export const secondary500 = '#95ACD4';
export const secondary600 = '#7189B6';
export const secondary700 = '#456297';
export const secondary800 = '#2A487F';
export const secondary900 = '#1E3768';

export const grey100 = '#F8F8F8';
export const grey200 = '#F0F0F0';
export const grey300 = '#dddddd';
export const grey400 = '#cccccc';
export const grey500 = '#aaaaaa';
export const grey600 = '#888888';
export const grey700 = '#555555';
export const grey800 = '#333333';
export const grey900 = '#0D0D0D';


// default color
export const white = '#ffffff';
export const greyLight = grey300;
export const grey = grey500;
export const greyDark = grey700;
export const black = grey800;
export const primary = primary500;
export const secondary = secondary500;

export const info = '#00C3FF';
export const success = '#2BCD86';
export const alarm = '#EB5000';
export const warning = '#FFB400';

// common
export const borderColor = secondary300;
export const border = `1px solid ${secondary300}`;
export const labelColor = secondary600;

export const defaultTransition = 'all 120ms ease-out';

// ----- break point ----- //
export const bp = {
  desktop: '1440px',
  padLand: '1024px',
  padMiddle: ' 800px',
  padPortrait: ' 768px',
  phoneLand: ' 667px',
  phoneMiddle: ' 480px',
  phonePortrait: ' 320px'
};

// component theme
export const avatar = {
  badgeBg: alarm
};

export const badge = {
  bg: info,
  inverseBg: white,
  color: white,
  inverseColor: info
};

export const button = {
  default: {
    bg: secondary100,
    hoverBg: secondary300,
    activeBg: secondary400
  },
  subtle: {
    bg: secondary400,
    hoverBg: secondary300,
    color: secondary700
  },
  flat: {
    bg: secondary200,
    color: white,
    hoverBg: secondary300,
    activeBg: secondary,
    activeBorderColor: secondary
  },
  light: {
    bg: white,
    hoverBg: secondary300
  },
  link: {
    bg: 'transparent',
    color: primary,
    hoverBg: 'transparent',
    darkColor: secondary700,
    hoverColor: lighten(0.1, primary),
    hoverDarkColor: lighten(0.1, secondary700)
  },
  disabled: {
    color: '#93a8ce',
    borderColor: '#eaeff8',
    bg: secondary100
  }
};

export const card = {
  bg: white,
  color: secondary700,
  button: {
    bg: white,
    color: (isPrimary: boolean) =>
      isPrimary ? primary : secondary700,
    hover: secondary300
  }
};

export const checkbox = {
  boxShadow: `0 0 0 2px ${rgba(secondary, 0.2)}`,
  borderColor: secondary400,
  checkedBorderColor: secondary,
  bg: (isCheckAndRound: boolean) =>
    isCheckAndRound ? primary : white,
  label: {
    color: secondary700
  },
  icon: {
    color: primary,
    roundColor: white,
    disabledColor: secondary300
  }
};

export const form = {
  bg: white,
  disabledBg: secondary200,
  color: secondary700,
  borderColor: secondary400,
  focusBorderColor: primary,
  placeholder: {
    color: secondary
  },
  addon: {
    bg: secondary200
  },
  disabled: {
    bg: secondary200,
    alarmBg: '#ffd0b8'
  },
  hint: {
    color: secondary
  },
  inputIcon: {
    color: '#456296',
    leftColor: '#C3D1EB',
    rightHoverColor: secondary400
  },
  switch: {
    checked: primary,
    disabled: secondary200,
    label: {
      bg: secondary200,
      shadowColor: secondary400,
      color: secondary400
    },
    icon: secondary400
  }
};

export const list = {
  link: {
    bg: secondary300,
    color: primary400
  },
  item: {
    bg: '#f7f9fd'
  }
};

export const pill = {
  bg: (selected: boolean) => (selected ? '#2A4880' : 'transparent'),
  color: (selected: boolean) => (selected ? white : '#456296'),
  hover: {
    bg: '#d8e2f5',
    color: '#456296'
  },
  active: {
    bg: '#c3d1eb',
    color: '#456296'
  }
};

export const progressBar = {
  defaultColor: '#95abd3'
};

export const radio = {
  color: (disabled: boolean) => (disabled ? secondary : secondary700),
  hoverBorderColor: primary
};

export const select = {
  item: {
    color: secondary600,
    hoverBg: secondary200
  },
  button: {
    color: secondary700
  }
};

export const table = {
  color: secondary700,
  hoverBg: secondary300,
  striped: {
    odd: secondary100
  }
};

export const tab = {
  bg: `linear-gradient(to left, ${info}, ${primary})`,
  panel: {
    bg: white,
    color: secondary600
  },
  item: {
    color: white,
    bg: rgba(255, 255, 255, 0.3),
    current: {
      color: secondary700,
      bg: white
    }
  }
};

export const tooltip = {
  bg: '#182d54',
  color: white
};

export const track = {
  borderColor: secondary,
  bg: secondary300,
  alarmbg: '#FFD0B8'
};

export const selection = {
  background: secondary,
  disabledBackground: '#95ABD3'
};
