const { shadeColor } = require('../utils/transformColor');

// Extensions
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_extensions

module.exports = (theme) => ({
  'extensionButton.prominentForeground': theme.foreground,
  'extensionButton.prominentBackground': shadeColor(theme.background, 50),
  'extensionButton.prominentHoverBackground': shadeColor(theme.background, 75),
  'extensionBadge.remoteBackground': shadeColor(theme.background, 50),
  'extensionBadge.remoteForeground': theme.foreground,
  'extensionIcon.starForeground': theme.highlight
});
