// Debug Icons
// https://code.visualstudio.com/api/references/theme-color#debug-icons-colors

module.exports = (theme) => ({
  'debugIcon.breakpointForeground': theme.error,
  'debugIcon.breakpointDisabledForeground': theme.error,
  'debugIcon.breakpointUnverifiedForeground': theme.error,
  'debugIcon.breakpointCurrentStackframeForeground': theme.error,
  'debugIcon.breakpointStackframeForeground': theme.error,
  'debugIcon.startForeground': theme.added,
  'debugIcon.pauseForeground': theme.info,
  'debugIcon.stopForeground': theme.error,
  'debugIcon.disconnectForeground': theme.warning,
  'debugIcon.restartForeground': theme.added,
  'debugIcon.stepOverForeground': theme.info,
  'debugIcon.stepIntoForeground': theme.info,
  'debugIcon.stepOutForeground': theme.info,
  'debugIcon.continueForeground': theme.added,
  'debugIcon.stepBackForeground': theme.info,
  'debugConsole.infoForeground': theme.info,
  'debugConsole.warningForeground': theme.warning,
  'debugConsole.errorForeground': theme.error,
  'debugConsole.sourceForeground': theme.info,
  'debugConsoleInputIcon.foreground': theme.highlight
});
