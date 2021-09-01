const { shadeColor, alphaColor } = require('../utils/transformColor');

// Scroll Bar Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_scroll-bar-control

module.exports = (theme) => ({
  'scrollbar.shadow': theme.transparent,
  'scrollbarSlider.activeBackground': alphaColor(
    shadeColor(theme.background, -50),
    40
  ),
  'scrollbarSlider.background': alphaColor(
    shadeColor(theme.background, -50),
    20
  ),
  'scrollbarSlider.hoverBackground': alphaColor(
    shadeColor(theme.background, -50),
    30
  )
});
