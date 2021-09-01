const { shadeColor, alphaColor } = require('../utils/transformColor');

// Debug Colors
// https://code.visualstudio.com/api/references/theme-color#debug-colors

module.exports = (theme) => ({
  'debugToolBar.background': shadeColor(theme.background, -50),
  'debugToolBar.border': theme.transparent,
  'editor.stackFrameHighlightBackground': alphaColor(theme.warning, 40),
  'editor.focusedStackFrameHighlightBackground': alphaColor(theme.warning, 60),
  'editor.inlineValuesForeground': shadeColor(theme.foreground, 10),
  'editor.inlineValuesBackground': shadeColor(theme.background, -50),
  'debugView.exceptionLabelForeground': theme.error,
  'debugView.exceptionLabelBackground': shadeColor(theme.background, -50),
  'debugView.stateLabelForeground': theme.info,
  'debugView.stateLabelBackground': shadeColor(theme.background, -50),
  'debugView.valueChangedHighlight': alphaColor(theme.highlight, 40),
  'debugTokenExpression.name': shadeColor(theme.foreground, -10),
  'debugTokenExpression.value': shadeColor(theme.foreground, -10),
  'debugTokenExpression.string': theme.foreground,
  'debugTokenExpression.boolean': theme.foreground,
  'debugTokenExpression.number': theme.foreground,
  'debugTokenExpression.error': theme.error
});
