// Testing Colors
// https://code.visualstudio.com/api/references/theme-color#testing-colors

module.exports = (theme) => ({
  'testing.iconFailed': theme.error,
  'testing.iconErrored': theme.error,
  'testing.iconPassed': theme.added,
  'testing.runAction': theme.info,
  'testing.iconQueued': theme.info,
  'testing.iconUnset': theme.foreground,
  'testing.iconSkipped': theme.warning,
  'testing.peekBorder': theme.transparent,
  'testing.message.error.decorationForeground': theme.error,
  'testing.message.error.lineBackground': theme.error,
  'testing.message.warning.decorationForeground': theme.warning,
  'testing.message.warning.lineBackground': theme.yellowDarker,
  'testing.message.info.decorationForeground': theme.info,
  'testing.message.info.lineBackground': theme.info,
  'testing.message.hint.decorationForeground': theme.hint,
  'testing.message.hint.lineBackground': theme.hint
});
