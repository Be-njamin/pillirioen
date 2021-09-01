const { alphaColor, shadeColor } = require('../utils/transformColor');

// Button Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control

module.exports = (theme) => ({
  'button.background': theme.highlight,
  'button.foreground': theme.background,
  'button.hoverBackground': shadeColor(theme.highlight, -10),
  'button.secondaryBackground': shadeColor(theme.highlight, -25),
  'button.secondaryForeground': theme.background,
  'button.secondaryHoverBackground': shadeColor(theme.highlight, -35),
  'button.border': alphaColor(shadeColor(theme.background, -50), 50),
  'checkbox.background': shadeColor(theme.background, -50),
  'checkbox.foreground': theme.foreground,
  'checkbox.border': alphaColor(shadeColor(theme.background, -50), 50)
});
