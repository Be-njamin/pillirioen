const { shadeColor } = require('../utils/transformColor');

// Peek View Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors

module.exports = (theme) => ({
  'peekView.border': theme.transparent,
  'peekViewEditor.background': shadeColor(theme.background, 25),
  'peekViewEditorGutter.background': shadeColor(theme.background, 50),
  'peekViewEditor.matchHighlightBackground': theme.warning,
  'peekViewEditor.matchHighlightBorder': theme.transparent,
  'peekViewResult.background': shadeColor(theme.background, -25),
  'peekViewResult.fileForeground': theme.foreground,
  'peekViewResult.lineForeground': theme.foregroundr,
  'peekViewResult.matchHighlightBackground': theme.warning,
  'peekViewResult.selectionBackground': shadeColor(theme.background, -50),
  'peekViewResult.selectionForeground': theme.foreground,
  'peekViewTitle.background': shadeColor(theme.background, -50),
  'peekViewTitleDescription.foreground': shadeColor(theme.foreground, -50),
  'peekViewTitleLabel.foreground': shadeColor(theme.foreground, -50)
});
