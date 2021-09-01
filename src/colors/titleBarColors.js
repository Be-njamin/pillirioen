const { alphaColor, shadeColor } = require('../utils/transformColor');

// Title Bar Colors (macOS)
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_title-bar-colors-macos

module.exports = (theme) => ({
  'titleBar.activeBackground': theme.background,
  'titleBar.activeForeground': theme.foreground,
  'titleBar.inactiveBackground': shadeColor(theme.background, -25),
  'titleBar.inactiveForeground': shadeColor(theme.foreground, -25),
  'titleBar.border': alphaColor(shadeColor(theme.background, -50), 50)
});
