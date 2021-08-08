const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

export default {
  colors,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Fira Sans', sans-serif",
  fontFamilyHeaders: "'Fira Sans Condensed', sans-serif;",
  transition: '200ms ease-in-out',
};
