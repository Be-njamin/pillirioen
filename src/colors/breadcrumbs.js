const { shadeColor } = require('../utils/transformColor');

// Breadcrumbs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_breadcrumbs

module.exports = (theme) => ({
  'breadcrumb.foreground': shadeColor(theme.foreground, -25),
  'breadcrumb.background': theme.background,
  'breadcrumb.focusForeground': theme.foreground,
  'breadcrumb.activeSelectionForeground': theme.foreground,
  'breadcrumbPicker.background': shadeColor(theme.background, -25)
});
