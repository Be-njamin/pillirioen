const { shadeColor, alphaColor } = require('../utils/transformColor');

// Notebook
// https://code.visualstudio.com/api/references/theme-color#notebook-colors

module.exports = (theme) => ({
  'notebook.cellBorderColor': theme.transparent,
  'notebook.cellHoverBackground': shadeColor(theme.background, 25),
  'notebook.cellInsertionIndicator': shadeColor(theme.background, 25),
  'notebook.cellStatusBarItemHoverBackground': shadeColor(theme.background, 25),
  'notebook.cellToolbarSeparator': theme.transparent,
  'notebook.cellEditorBackground': shadeColor(theme.background, -50),
  'notebook.focusedCellBackground': shadeColor(theme.background, -25),
  'notebook.focusedCellBorder': theme.transparent,
  'notebook.focusedEditorBorder': theme.transparent,
  'notebook.inactiveFocusedCellBorder': theme.background,
  'notebook.inactiveSelectedCellBorder': theme.transparent,
  'notebook.outputContainerBackgroundColor': shadeColor(theme.background, -50),
  'notebook.selectedCellBackground': shadeColor(theme.background, -50),
  'notebook.selectedCellBorder': theme.transparent,
  'notebook.symbolHighlightBackground': shadeColor(theme.foreground, -25),
  'notebookScrollbarSlider.activeBackground': alphaColor(
    shadeColor(theme.background, -50),
    80
  ),
  'notebookScrollbarSlider.background': alphaColor(
    shadeColor(theme.background, -50),
    40
  ),
  'notebookScrollbarSlider.hoverBackground': alphaColor(
    shadeColor(theme.background, -50),
    60
  ),
  'notebookStatusErrorIcon.foreground': theme.error,
  'notebookStatusRunningIcon.foreground': theme.info,
  'notebookStatusSuccessIcon.foreground': theme.added
});
