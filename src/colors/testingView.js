const { alphaColor } = require('../utils/transformColor');

// Testing View
// https://code.visualstudio.com/api/references/theme-color#testing-view-colors

module.exports = (theme) => ({
  'testing.iconFailed': theme.error,
  'testing.iconErrored': theme.warning,
  'testing.iconPassed': theme.added,
  'testing.runAction': theme.info,
  'testing.iconQueued': theme.info,
  'testing.iconUnset': theme.foreground,
  'testing.iconSkipped': theme.warning,
  'testing.peekBorder': theme.transparent,
  'testing.message.error.decorationForeground': theme.error,
  'testing.message.error.lineBackground': alphaColor(theme.error, 40),
  'testing.message.warning.decorationForeground': theme.warning,
  'testing.message.warning.lineBackground': alphaColor(theme.warning, 40),
  'testing.message.info.decorationForeground': theme.info,
  'testing.message.info.lineBackground': alphaColor(theme.info, 40),
  'testing.message.hint.decorationForeground': theme.hint,
  'testing.message.hint.lineBackground': alphaColor(theme.hint, 40)
});
