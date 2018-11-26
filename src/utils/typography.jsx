import Typography from 'typography';

const config = require('../../config/website');

const typography = new Typography({
  title: 'Zimarc',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, 'dosis'],
  bodyFontFamily: [config.bodyFontFamily, 'dosis'],
  scaleRatio: 2.5,
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});

export default typography;
