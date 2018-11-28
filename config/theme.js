import { darken } from 'polished';

const brand = {
  primary: 'orange',
  secondary: 'transparent',
};

const colors = {
  grey: '#25252',
  black: '#000',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
};

export const overlay = ['#f76262', '#216583', '#65c0ba', '#35477d', '#6c5b7b', '#203541', '#9951ff', '#480032'];

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '10rem',
    text: '80rem',
    position: 'absolute',
  },
  spacer: {
    horizontal: '1rem',
    vertical: '0rem',
  },
};

export default theme;
