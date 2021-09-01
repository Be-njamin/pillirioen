const { alphaColor, shadeColor } = require('../utils/transformColor');

// Lists and Trees
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees

module.exports = (theme) => ({
  'list.activeSelectionBackground': theme.background,
  'list.activeSelectionForeground': theme.foreground,
  'list.activeSelectionIconForeground': theme.foreground,
  'list.dropBackground': shadeColor(theme.background, -50),
  'list.focusBackground': shadeColor(theme.background, 20),
  'list.focusForeground': shadeColor(theme.foreground, 20),
  'list.focusHighlightForeground': theme.foreground,
  'list.focusOutline': theme.transparent,
  'list.highlightForeground': theme.foreground,
  'list.hoverBackground': theme.background,
  'list.hoverForeground': theme.foreground,
  'list.inactiveSelectionBackground': shadeColor(theme.background, -40),
  'list.inactiveSelectionForeground': shadeColor(theme.foreground, -40),
  'list.inactiveSelectionIconForeground': shadeColor(theme.foreground, -40),
  'list.inactiveFocusBackground': shadeColor(theme.background, -30),
  'list.inactiveFocusOutline': theme.transparent,
  'list.invalidItemForeground': theme.error,
  'list.errorForeground': theme.error,
  'list.warningForeground': theme.warning,
  'listFilterWidget.background': theme.foreground,
  'listFilterWidget.outline': theme.transparent,
  'listFilterWidget.noMatchesOutline': theme.transparent,
  'list.filterMatchBackground': shadeColor(theme.background, -30),
  'list.filterMatchBorder': theme.transparent,
  'list.deemphasizedForeground': theme.error,
  'tree.indentGuidesStroke': shadeColor(theme.background, 25),
  'tree.tableColumnsBorder': shadeColor(theme.background, 75)
});
