import Typography from 'typography';

const config = require('../../config/website');

const typography = new Typography({
  title: 'Zimarc',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, 'Dosis', 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'Dosis', 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['300'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['200','500','600'],
    },
  ],
});

export default typography;
