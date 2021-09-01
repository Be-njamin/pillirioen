const { shadeColor, alphaColor } = require('../utils/transformColor');

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = (theme) => ({
  'editorWidget.foreground': theme.foreground,
  'editorWidget.background': shadeColor(theme.background, -50),
  'editorWidget.border': theme.highlight,
  'editorWidget.resizeBorder': theme.highlight,
  'editorSuggestWidget.background': shadeColor(theme.background, -50),
  'editorSuggestWidget.border': theme.transparent,
  'editorSuggestWidget.foreground': shadeColor(theme.foreground, -25),
  'editorSuggestWidget.focusHighlightForeground': theme.foreground,
  'editorSuggestWidget.highlightForeground': theme.foreground,
  'editorSuggestWidget.selectedBackground': shadeColor(theme.background, 25),
  'editorSuggestWidget.selectedForeground': theme.foreground,
  'editorSuggestWidget.selectedIconForeground': theme.foreground,
  'editorHoverWidget.foreground': theme.foreground,
  'editorHoverWidget.background': shadeColor(theme.background, -50),
  'editorHoverWidget.border': theme.transparent,
  'editorHoverWidget.statusBarBackground': shadeColor(theme.background, -50),
  'editorGhostText.border': theme.transparent,
  'editorGhostText.foreground': shadeColor(theme.foreground, -25),
  'debugExceptionWidget.background': alphaColor(theme.warning, 50),
  'debugExceptionWidget.border': theme.transparent,
  'editorMarkerNavigation.background': shadeColor(theme.background, -50),
  'editorMarkerNavigationError.background': theme.error,
  'editorMarkerNavigationWarning.background': theme.warning,
  'editorMarkerNavigationInfo.background': theme.info
});
