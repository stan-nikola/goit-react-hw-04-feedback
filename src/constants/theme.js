import '../index.css';
export const Theme = Object.freeze({
  colors: { primary: '#ffe4c4de;', iconBg: '#000000' },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '28px',
    xl: '36px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  borders: {
    none: 'none',
    normal: '3px solid',
  },
  radii: { none: '0', normal: '4px', round: '50%' },
  shadows: {
    items:
      'rgba(0, 0, 0, 0.09) 0px 5px 5px, rgba(0, 0, 0, 0.09) 0px 5px 5px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
  },
});
