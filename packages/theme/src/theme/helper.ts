import { lighten, darken, toColorString, parseToHsl } from 'polished';

export const primaryPaletteGenerator = (color: string) => ({
  primary100: lighten(0.4, color),
  primary200: lighten(0.3, color),
  primary300: lighten(0.2, color),
  primary400: lighten(0.1, color),
  primary500: color,
  primary600: darken(0.1, color),
  primary700: darken(0.2, color),
  primary800: darken(0.3, color),
  primary900: darken(0.4, color),
  primary: color,
});

const secondaryPaletteGenerator = (hue: number) => ({
  secondary100: toColorString({
    hue,
    saturation: 280.0000000000002 / 360,
    lightness: 353.64705882352945 / 360,
  }),
  secondary200: toColorString({
    hue,
    saturation: 252.0000000000003 / 360,
    lightness: 345.88235294117646 / 360,
  }),
  secondary300: toColorString({
    hue,
    saturation: 225.0000000000002 / 360,
    lightness: 326.11764705882354 / 360,
  }),
  secondary400: toColorString({
    hue,
    saturation: 177.72151898734157 / 360,
    lightness: 304.2352941176471 / 360,
  }),
  secondary500: toColorString({
    hue,
    saturation: 152.2147651006712 / 360,
    lightness: 254.82352941176472 / 360,
  }),
  secondary600: toColorString({
    hue,
    saturation: 115.53488372093027 / 360,
    lightness: 208.23529411764704 / 360,
  }),
  secondary700: toColorString({
    hue,
    saturation: 134.1818181818182 / 360,
    lightness: 155.29411764705884 / 360,
  }),
  secondary800: toColorString({
    hue,
    saturation: 181.0650887573965 / 360,
    lightness: 119.29411764705883 / 360,
  }),
  secondary900: toColorString({
    hue,
    saturation: 198.8059701492537 / 360,
    lightness: 94.58823529411765 / 360,
  }),
  secondary: toColorString({
    hue,
    saturation: 152.2147651006712 / 360,
    lightness: 254.82352941176472 / 360,
  }),
});

export const colorPaletteGenerator = (color: string) => {
  const primary = primaryPaletteGenerator(color);
  const hsl = parseToHsl(color);
  const secondary = secondaryPaletteGenerator(hsl.hue);
  return {
    ...primary,
    ...secondary,
  };
};
