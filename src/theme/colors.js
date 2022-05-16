const { alphaColor, shadeColor } = require('../utils/transformColor');

module.exports = (theme) => ({
  descriptionForeground: theme.foreground,
  focusBorder: theme.transparent,
  foreground: theme.foreground,
  errorForeground: theme.error,

  'activityBar.border': shadeColor(theme.background, -50),
  'activityBar.activeBorder': theme.highlight,
  'activityBar.background': theme.background,
  'activityBar.foreground': theme.foreground,
  'activityBar.inactiveForeground': shadeColor(theme.foreground, -50),

  'activityBarBadge.background': shadeColor(theme.highlight, -25),
  'activityBarBadge.foreground': theme.background,

  'badge.background': theme.highlight,
  'badge.foreground': theme.background,

  'breadcrumb.foreground': shadeColor(theme.foreground, -25),
  'breadcrumb.focusForeground': theme.foreground,
  'breadcrumb.activeSelectionForeground': shadeColor(theme.foreground, 25),

  'breadcrumbPicker.background': shadeColor(theme.background, -25),

  'button.secondaryBackground': shadeColor(theme.highlight, -50),
  'button.secondaryHoverBackground': theme.highlight,
  'button.secondaryForeground': theme.background,
  'button.background': shadeColor(theme.highlight, -25),
  'button.hoverBackground': shadeColor(theme.highlight, 25),
  'button.foreground': theme.background,

  'checkbox.background': shadeColor(theme.background, -25),
  'checkbox.border': shadeColor(theme.background, -50),

  'debugToolBar.background': shadeColor(theme.background, -50),

  'diffEditor.insertedTextBackground': alphaColor(theme.added, 15),
  'diffEditor.removedTextBackground': alphaColor(theme.deleted, 15),

  'dropdown.background': shadeColor(theme.background, -25),
  'dropdown.foreground': theme.foreground,
  'dropdown.listBackground': shadeColor(theme.background, -25),
  'dropdown.border': shadeColor(theme.background, -50),

  'editor.background': theme.background,
  'editor.foreground': theme.foreground,
  'editor.wordHighlightStrongBackground': theme.transparent,
  'editor.selectionHighlightBackground': theme.transparent,
  'editor.wordHighlightBackground': theme.transparent,
  'editor.linkedEditingBackground': theme.transparent,
  'editor.foldBackground': shadeColor(theme.background, -25),
  'editor.lineHighlightBackground': shadeColor(theme.background, 25),
  'editor.findMatchHighlightBackground': shadeColor(theme.foreground, -50),
  'editor.inactiveSelectionBackground': shadeColor(theme.foreground, -50),
  'editor.selectionBackground': shadeColor(theme.foreground, -50),
  'editor.findMatchBackground': shadeColor(theme.foreground, -25),
  'editor.selectionHighlightBorder': theme.foreground,
  'editor.focusedStackFrameHighlightBackground': shadeColor(theme.warning, -50),
  'editor.stackFrameHighlightBackground': shadeColor(theme.warning, -75),
  'editor.wordHighlightBorder': alphaColor(theme.foreground, 25),
  'editor.wordHighlightStrongBorder': alphaColor(theme.foreground, 50),

  'editorBracketMatch.background': shadeColor(theme.foreground, -50),
  'editorBracketMatch.border': theme.transparent,
  'editorCursor.foreground': theme.foreground,
  'editorError.foreground': theme.error,
  'editorGroup.border': shadeColor(theme.background, 25),
  'editorGroupHeader.tabsBackground': shadeColor(theme.background, -75),
  'editorGroupHeader.tabsBorder': shadeColor(theme.background, -50),
  'editorGutter.addedBackground': theme.added,
  'editorGutter.modifiedBackground': theme.modified,
  'editorGutter.deletedBackground': theme.deleted,
  'editorIndentGuide.background': shadeColor(theme.background, 50),
  'editorIndentGuide.activeBackground': shadeColor(theme.foreground, -50),
  'editorLineNumber.foreground': shadeColor(theme.foreground, -50),
  'editorLineNumber.activeForeground': theme.foreground,
  'editorOverviewRuler.border': theme.transparent,
  'editorWhitespace.foreground': shadeColor(theme.foreground, -50),
  'editorWarning.foreground': theme.warning,
  'editorWidget.background': shadeColor(theme.background, -75),

  'gitDecoration.addedResourceForeground': theme.added,
  'gitDecoration.submoduleResourceForeground': theme.added,
  'gitDecoration.modifiedResourceForeground': theme.modified,
  'gitDecoration.untrackedResourceForeground': theme.untracked,
  'gitDecoration.deletedResourceForeground': theme.deleted,
  'gitDecoration.conflictingResourceForeground': theme.warning,
  'gitDecoration.ignoredResourceForeground': shadeColor(theme.foreground, -50),

  'input.placeholderForeground': shadeColor(theme.foreground, -50),
  'input.background': shadeColor(theme.background, -25),
  'input.foreground': theme.foreground,
  'input.border': shadeColor(theme.background, -50),

  'list.inactiveFocusBackground': shadeColor(theme.background, -50),
  'list.activeSelectionBackground': theme.background,
  'list.hoverBackground': theme.background,
  'list.inactiveSelectionBackground': shadeColor(theme.background, 25),
  'list.focusBackground': shadeColor(theme.background, 50),
  'list.inactiveSelectionForeground': shadeColor(theme.foreground, -50),
  'list.activeSelectionForeground': theme.foreground,
  'list.hoverForeground': shadeColor(theme.foreground, 50),

  'notifications.background': shadeColor(theme.background, -75),
  'notifications.foreground': theme.foreground,
  'notifications.border': theme.transparent,

  'notificationCenterHeader.background': shadeColor(theme.background, -25),
  'notificationCenterHeader.foreground': shadeColor(theme.foreground, 25),

  'notificationsInfoIcon.foreground': theme.info,
  'notificationsWarningIcon.foreground': theme.warning,
  'notificationsErrorIcon.foreground': theme.error,

  'panel.border': shadeColor(theme.background, -50),
  'panel.background': shadeColor(theme.background, -25),

  'panelTitle.activeBorder': theme.foreground,
  'panelTitle.inactiveForeground': shadeColor(theme.foreground, -50),
  'panelTitle.activeForeground': theme.foreground,

  'panelInput.border': theme.transparent,

  'peekViewResult.background': shadeColor(theme.background, -50),
  'peekViewResult.matchHighlightBackground': theme.highlight,

  'peekViewEditor.background': shadeColor(theme.background, -25),
  'peekViewEditor.matchHighlightBackground': alphaColor(theme.highlight, 25),

  'pickerGroup.border': shadeColor(theme.background, 50),
  'pickerGroup.foreground': shadeColor(theme.foreground, -50),

  'progressBar.background': theme.highlight,

  'quickInput.background': shadeColor(theme.background, -50),
  'quickInput.foreground': shadeColor(theme.foreground, -50),

  'scrollbar.shadow': theme.transparent,

  'scrollbarSlider.background': alphaColor(shadeColor(theme.highlight, -50), 25),
  'scrollbarSlider.hoverBackground': alphaColor(shadeColor(theme.highlight, -25), 25),
  'scrollbarSlider.activeBackground': alphaColor(theme.highlight, 25),

  'settings.modifiedItemIndicator': shadeColor(theme.highlight, -50),
  'settings.headerForeground': theme.foreground,

  'sideBar.background': shadeColor(theme.background, -25),
  'sideBar.foreground': theme.foreground,
  'sideBar.border': shadeColor(theme.background, -50),

  'sideBarSectionHeader.background': theme.background,
  'sideBarSectionHeader.foreground': theme.foreground,
  'sideBarSectionHeader.border': shadeColor(theme.background, -50),

  'sideBarTitle.foreground': theme.foreground,

  'statusBar.background': shadeColor(theme.background, 50),
  'statusBar.foreground': theme.foreground,
  'statusBar.noFolderBackground': theme.highlight,
  'statusBar.debuggingBackground': theme.highlight,
  'statusBar.debuggingForeground': theme.foreground,
  'statusBar.border': shadeColor(theme.background, -50),

  'statusBarItem.remoteBackground': theme.info,
  'statusBarItem.remoteForeground': theme.foreground,
  'statusBarItem.prominentBackground': shadeColor(theme.background, 75),

  'tab.inactiveBackground': shadeColor(theme.background, -50),
  'tab.unfocusedHoverBackground': shadeColor(theme.background, -25),
  'tab.unfocusedActiveBorder': theme.transparent,
  'tab.unfocusedActiveBorderTop': shadeColor(theme.highlight, -50),
  'tab.activeBackground': theme.background,
  'tab.hoverBackground': theme.background,
  'tab.border': theme.background,
  'tab.inactiveForeground': shadeColor(theme.foreground, -50),
  'tab.activeBorder': shadeColor(theme.foreground, -25),
  'tab.activeForeground': theme.foreground,
  'tab.activeBorderTop': theme.highlight,

  'terminal.ansiBlack': '#545d68',
  'terminal.ansiBrightBlack': shadeColor('#545d68', 25),
  'terminal.ansiBlue': '#316dca',
  'terminal.ansiBrightBlue': shadeColor('#316dca', 25),
  'terminal.ansiCyan': '#337582',
  'terminal.ansiBrightCyan': shadeColor('#337582', 25),
  'terminal.ansiGreen': '#347d39',
  'terminal.ansiBrightGreen': shadeColor('#347d39', 25),
  'terminal.ansiMagenta': '#ae4c82',
  'terminal.ansiBrightMagenta': shadeColor('#ae4c82', 25),
  'terminal.ansiRed': '#c93c37',
  'terminal.ansiBrightRed': shadeColor('#c93c37', 25),
  'terminal.ansiWhite': '#cdd9e5',
  'terminal.ansiBrightWhite': shadeColor('#cdd9e5', 25),
  'terminal.ansiYellow': '#966600',
  'terminal.ansiBrightYellow': shadeColor('#966600', 25),
  'terminal.tab.activeBorder': theme.transparent,
  'terminal.foreground': theme.foreground,

  'terminalCursor.background': shadeColor(theme.background, -25),
  'terminalCursor.foreground': theme.foreground,

  'textBlockQuote.background': shadeColor(theme.background, -25),
  'textBlockQuote.border': theme.highlight,

  'textCodeBlock.background': shadeColor(theme.background, -25),

  'textPreformat.foreground': theme.foreground,

  'textSeparator.foreground': theme.foreground,

  'textLink.foreground': shadeColor(theme.highlight, -25),
  'textLink.activeForeground': theme.highlight,

  'titleBar.border': theme.transparent,
  'titleBar.inactiveBackground': shadeColor(theme.background, -25),
  'titleBar.activeBackground': theme.background,
  'titleBar.inactiveForeground': shadeColor(theme.foreground, -50),
  'titleBar.activeForeground': theme.foreground,

  'tree.indentGuidesStroke': shadeColor(theme.background, 25),

  'welcomePage.buttonBackground': shadeColor(theme.highlight, -25),
  'welcomePage.buttonHoverBackground': shadeColor(theme.highlight, -50)
});
