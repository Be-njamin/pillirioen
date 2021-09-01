const { alphaColor, shadeColor } = require('../utils/transformColor');

// Activity Bar
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_activity-bar

module.exports = (theme) => ({
  'activityBar.background': theme.background,
  'activityBar.dropBorder': theme.foreground,
  'activityBar.foreground': theme.foreground,
  'activityBar.inactiveForeground': shadeColor(theme.foreground, -50),
  'activityBar.border': alphaColor(shadeColor(theme.background, -50), 50),
  'activityBarBadge.background': theme.highlight,
  'activityBarBadge.foreground': theme.background,
  'activityBar.activeBorder': theme.highlight,
  'activityBar.activeBackground': shadeColor(theme.background, -25),
  'activityBar.activeFocusBorder': theme.foreground
});
