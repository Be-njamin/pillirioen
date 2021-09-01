const { alphaColor, shadeColor } = require('../utils/transformColor');

// Status Bar Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors

module.exports = (theme) => ({
  'statusBar.background': shadeColor(theme.background, -50),
  'statusBar.foreground': theme.foreground,
  'statusBar.border': alphaColor(shadeColor(theme.background, -50), 50),
  'statusBar.debuggingBackground': theme.highlight,
  'statusBar.debuggingForeground': theme.foreground,
  'statusBar.debuggingBorder': theme.transparent,
  'statusBar.noFolderBackground': theme.highlight,
  'statusBar.noFolderForeground': theme.foreground,
  'statusBar.noFolderBorder': theme.transparent,
  'statusBarItem.activeBackground': alphaColor(theme.background, 60),
  'statusBarItem.hoverBackground': alphaColor(theme.background, 20),
  'statusBarItem.prominentForeground': theme.background,
  'statusBarItem.prominentBackground': alphaColor(
    shadeColor(theme.background, -50),
    60
  ),
  'statusBarItem.prominentHoverBackground': alphaColor(
    shadeColor(theme.background, -50),
    80
  ),
  'statusBarItem.remoteBackground': theme.info,
  'statusBarItem.remoteForeground': theme.foreground,
  'statusBarItem.errorBackground': theme.error,
  'statusBarItem.errorForeground': theme.foreground,
  'statusBarItem.warningBackground': theme.warning,
  'statusBarItem.warningForeground': theme.foreground
});
