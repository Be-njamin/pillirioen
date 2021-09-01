const { alphaColor, shadeColor } = require('../utils/transformColor');

// Menu Bar Colors
// https://code.visualstudio.com/api/references/theme-color#menu-bar-colors

module.exports = (theme) => ({
  'menubar.selectionForeground': theme.foreground,
  'menubar.selectionBackground': theme.background,
  'menubar.selectionBorder': theme.transparent,
  'menu.foreground': shadeColor(theme.foreground, -50),
  'menu.background': shadeColor(theme.background, -50),
  'menu.selectionForeground': theme.foreground,
  'menu.selectionBackground': theme.background,
  'menu.selectionBorder': theme.transparent,
  'menu.separatorBackground': shadeColor(theme.foreground, -25),
  'menu.border': alphaColor(shadeColor(theme.background, -50), 50)
});
