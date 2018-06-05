// @flow

import { rgba, lighten } from 'polished';

// component theme
export default (theme: Object) => ({
  avatar: {
    badgeBg: theme.alarm,
  },
  badge: {
    bg: theme.info,
    inverseBg: theme.white,
    color: theme.white,
    inverseColor: theme.info,
  },
  button: {
    default: {
      bg: theme.secondary100,
      hoverBg: theme.secondary300,
      activeBg: theme.secondary400,
    },
    subtle: {
      bg: theme.secondary400,
      hoverBg: theme.secondary300,
      color: theme.secondary700,
    },
    flat: {
      bg: theme.secondary200,
      color: theme.white,
      hoverBg: theme.secondary300,
      activeBg: theme.secondary,
      activeBorderColor: theme.secondary,
    },
    light: {
      bg: theme.white,
      hoverBg: theme.secondary300,
    },
    link: {
      bg: 'transparent',
      color: theme.primary500,
      hoverBg: 'transparent',
      darkColor: theme.secondary700,
      hoverColor: lighten(0.1, theme.primary500),
      hoverDarkColor: lighten(0.1, theme.secondary700),
    },
    disabled: {
      color: '#93a8ce',
      borderColor: '#eaeff8',
      bg: theme.secondary100,
    },
  },
  card: {
    bg: theme.white,
    color: theme.secondary700,
    button: {
      bg: theme.white,
      color: (isPrimary: boolean) =>
        isPrimary ? theme.primary500 : theme.secondary700,
      hover: theme.secondary300,
    },
  },
  checkbox: {
    boxShadow: `0 0 0 2px ${rgba(theme.secondary, 0.2)}`,
    borderColor: theme.secondary400,
    checkedBorderColor: theme.secondary,
    bg: (isCheckAndRound: boolean) =>
      isCheckAndRound ? theme.primary500 : theme.white,
    label: {
      color: theme.secondary700,
    },
    icon: {
      color: theme.primary500,
      roundColor: theme.white,
      disabledColor: theme.secondary300,
    },
  },
  form: {
    bg: theme.white,
    disabledBg: theme.secondary200,
    color: theme.secondary700,
    borderColor: theme.secondary400,
    focusBorderColor: theme.primary500,
    placeholder: {
      color: theme.secondary,
    },
    addon: {
      bg: theme.secondary200,
    },
    disabled: {
      bg: theme.secondary200,
      alarmBg: '#ffd0b8',
    },
    hint: {
      color: theme.secondary,
    },
    inputIcon: {
      color: '#456296',
      leftColor: '#C3D1EB',
      rightHoverColor: theme.secondary400,
    },
    switch: {
      checked: theme.primary500,
      disabled: theme.secondary200,
      label: {
        bg: theme.secondary200,
        shadowColor: theme.secondary400,
        color: theme.secondary400,
      },
      icon: theme.secondary400,
    },
  },
  list: {
    link: {
      bg: theme.secondary300,
      color: theme.primary400,
    },
    item: {
      bg: '#f7f9fd',
    },
  },
  pill: {
    bg: (selected: boolean) => (selected ? '#2A4880' : 'transparent'),
    color: (selected: boolean) => (selected ? theme.white : '#456296'),
    hover: {
      bg: '#d8e2f5',
      color: '#456296',
    },
    active: {
      bg: '#c3d1eb',
      color: '#456296',
    },
  },
  progressBar: {
    defaultColor: '#95abd3',
  },
  radio: {
    color: (disabled: boolean) =>
      disabled ? theme.secondary : theme.secondary700,
    hoverBorderColor: theme.primary500,
  },
  select: {
    item: {
      color: theme.secondary600,
      hoverBg: theme.secondary200,
    },
    button: {
      color: theme.secondary700,
    },
  },
  table: {
    color: theme.secondary700,
    hoverBg: theme.secondary300,
    striped: {
      odd: theme.secondary100,
    },
  },
  tab: {
    bg: `linear-gradient(to left, ${theme.info}, ${theme.primary500})`,
    panel: {
      bg: theme.white,
      color: theme.secondary600,
    },
    item: {
      color: theme.white,
      bg: rgba(255, 255, 255, 0.3),
      current: {
        color: theme.secondary700,
        bg: theme.white,
      },
    },
  },
  tooltip: {
    bg: '#182d54',
    color: theme.white,
  },
  track: {
    borderColor: theme.secondary,
    bg: theme.secondary300,
    alarmbg: '#FFD0B8',
  },
  selection: {
    background: theme.secondary,
    disabledBackground: '#95ABD3',
  },
});
