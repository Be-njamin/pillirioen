const { alphaColor, shadeColor } = require('../utils/transformColor');

// Dropdown Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_dropdown-control

module.exports = (theme) => ({
  'dropdown.background': shadeColor(theme.background, -50),
  'dropdown.listBackground': theme.background,
  'dropdown.border': alphaColor(shadeColor(theme.background, -50), 50),
  'dropdown.foreground': theme.foreground
});
