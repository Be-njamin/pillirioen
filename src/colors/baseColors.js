const { shadeColor, alphaColor } = require('../utils/transformColor');

// Base Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors

module.exports = (theme) => ({
  focusBorder: theme.transparent,
  foreground: theme.foreground,
  'widget.shadow': theme.transparent,
  'selection.background': alphaColor(shadeColor(theme.foreground, -25), 50),
  descriptionForeground: theme.foreground,
  errorForeground: theme.error,
  'icon.foreground': theme.foreground,
  'sash.hoverBorder': theme.transparent
});
