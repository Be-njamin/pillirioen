const { shadeColor } = require('../utils/transformColor');

// Settings Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_settings-editor-colors

module.exports = (theme) => ({
  'settings.headerForeground': theme.foreground,
  'settings.modifiedItemIndicator': theme.highlight,
  'settings.dropdownBackground': shadeColor(theme.background, -50),
  'settings.dropdownForeground': theme.foreground,
  'settings.dropdownBorder': theme.transparent,
  'settings.dropdownListBorder': shadeColor(theme.background, 25),
  'settings.checkboxBackground': shadeColor(theme.background, -50),
  'settings.checkboxForeground': theme.foreground,
  'settings.checkboxBorder': theme.transparent,
  'settings.rowHoverBackground': shadeColor(theme.background, 25),
  'settings.textInputBackground': shadeColor(theme.background, -50),
  'settings.textInputForeground': theme.foreground,
  'settings.textInputBorder': theme.transparent,
  'settings.numberInputBackground': shadeColor(theme.background, -50),
  'settings.numberInputForeground': theme.foreground,
  'settings.numberInputBorder': theme.transparent,
  'settings.focusedRowBackground': shadeColor(theme.background, 50),
  'settings.focusedRowBorder': theme.transparent
});
