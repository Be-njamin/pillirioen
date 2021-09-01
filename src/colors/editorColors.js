const { shadeColor, alphaColor } = require('../utils/transformColor');

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors

module.exports = (theme) => ({
  'editor.background': theme.background,
  'editor.foreground': theme.foreground,
  'editorLineNumber.foreground': shadeColor(theme.foreground, -50),
  'editorLineNumber.activeForeground': theme.foreground,
  'editorCursor.background': theme.transparent,
  'editorCursor.foreground': theme.foreground,
  'editor.selectionBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editor.inactiveSelectionBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    25
  ),
  'editor.selectionForeground': theme.foreground,
  'editor.selectionHighlightBackground': theme.transparent,
  'editor.selectionHighlightBorder': alphaColor(theme.foreground, 50),
  'editor.wordHighlightBackground': theme.transparent,
  'editor.wordHighlightStrongBackground': theme.transparent,
  'editor.wordHighlightBorder': alphaColor(theme.foreground, 25),
  'editor.wordHighlightStrongBorder': alphaColor(theme.foreground, 75),
  'editor.findMatchBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editor.findMatchHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    25
  ),
  'editor.findMatchBorder': theme.transparent,
  'editor.findMatchHighlightBorder': theme.transparent,
  'editor.findRangeHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    25
  ),
  'editor.findRangeHighlightBorder': theme.transparent,
  'searchEditor.findMatchBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'searchEditor.findMatchBorder': theme.transparent,
  'searchEditor.textInputBorder': theme.transparent,
  'editor.hoverHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    10
  ),
  'editor.lineHighlightBackground': shadeColor(theme.background, 50),
  'editor.lineHighlightBorder': theme.transparent,
  'editorLink.activeForeground': shadeColor(theme.foreground, -10),
  'editor.rangeHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    10
  ),
  'editor.rangeHighlightBorder': theme.transparent,
  'editor.symbolHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -40),
    25
  ),
  'editor.symbolHighlightBorder': theme.transparent,
  'editorWhitespace.foreground': shadeColor(theme.background, 75),
  'editorIndentGuide.background': shadeColor(theme.background, 25),
  'editorIndentGuide.activeBackground': shadeColor(theme.background, 75),
  'editorInlayHint.background': shadeColor(theme.background, -25),
  'editorInlayHint.foreground': theme.foreground,
  'editorRuler.foreground': shadeColor(theme.background, 25),
  'editor.linkedEditingBackground': theme.transparent,
  'editorCodeLens.foreground': shadeColor(theme.foreground, -50),
  'editorLightBulb.foreground': shadeColor(theme.foreground, -50),
  'editorLightBulbAutoFix.foreground': shadeColor(theme.foreground, -25),
  'editorBracketMatch.background': alphaColor(theme.foreground, 10),
  'editorBracketMatch.border': theme.transparent,
  'editor.foldBackground': shadeColor(theme.background, -25),
  'editorOverviewRuler.background': theme.transparent,
  'editorOverviewRuler.border': theme.transparent,
  'editorOverviewRuler.findMatchForeground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editorOverviewRuler.rangeHighlightForeground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editorOverviewRuler.selectionHighlightForeground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editorOverviewRuler.wordHighlightForeground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editorOverviewRuler.wordHighlightStrongForeground': alphaColor(
    shadeColor(theme.foreground, -40),
    50
  ),
  'editorOverviewRuler.modifiedForeground': theme.transparent,
  'editorOverviewRuler.addedForeground': theme.transparent,
  'editorOverviewRuler.deletedForeground': theme.transparent,
  'editorOverviewRuler.errorForeground': theme.transparent,
  'editorOverviewRuler.warningForeground': theme.transparent,
  'editorOverviewRuler.infoForeground': theme.transparent,
  'editorOverviewRuler.bracketMatchForeground': alphaColor(
    theme.foreground,
    10
  ),
  'editorError.foreground': theme.error,
  'editorError.border': theme.transparent,
  'editorError.background': theme.transparent,
  'editorWarning.foreground': theme.warning,
  'editorWarning.border': theme.transparent,
  'editorWarning.background': theme.transparent,
  'editorInfo.foreground': theme.info,
  'editorInfo.border': theme.transparent,
  'editorInfo.background': theme.transparent,
  'editorHint.foreground': theme.hint,
  'editorHint.border': theme.transparent,
  'problemsErrorIcon.foreground': theme.error,
  'problemsWarningIcon.foreground': theme.warning,
  'problemsInfoIcon.foreground': theme.info,
  'editorUnnecessaryCode.border': theme.transparent,
  'editorUnnecessaryCode.opacity': alphaColor(theme.foreground, 25),
  'editorGutter.background': theme.background,
  'editorGutter.modifiedBackground': theme.modified,
  'editorGutter.addedBackground': theme.added,
  'editorGutter.deletedBackground': theme.deleted,
  'editorGutter.commentRangeForeground': theme.transparent,
  'editorGutter.foldingControlForeground': shadeColor(theme.foreground, -50)
});
