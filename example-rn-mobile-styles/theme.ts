const palette = {
  greenSuccess: '#0c9b2c',
  redError: '#fd2f2f',
  yellowWarning: '#ffc83d',
  blueInfo: '#2196f3',

  white: '#fff',
  whiteSmoke: '#f5f5f5',
  black: '#000',

  gray1: '#333',
  gray2: '#666',
  gray3: '#999',
  gray4: '#ccc',
};

export const theme = {
  colors: {
    primary: palette.black,
    primaryContrast: palette.gray3,

    secondary: palette.white,
    secondaryContrast: palette.black,

    background: palette.whiteSmoke,
    backgroundContrast: palette.black,

    text: palette.black,

    white: palette.white,
    black: palette.black,

    error: palette.redError,
    success: palette.greenSuccess,
    warning: palette.yellowWarning,
    info: palette.blueInfo,

    gray1: palette.gray1,
    gray2: palette.gray2,
    gray3: palette.gray3,
    gray4: palette.gray4,
  },
  fonts: {
    regular: 'Arial',
    semibold: 'Arial',
    bold: 'Arial',
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
};
