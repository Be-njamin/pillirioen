const { shadeColor } = require('../utils/transformColor');

// Quick Picker
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_quick-picker

module.exports = (theme) => ({
  'pickerGroup.border': shadeColor(theme.background, 50),
  'pickerGroup.foreground': shadeColor(theme.foreground, -50),
  'quickInput.background': shadeColor(theme.background, -50),
  'quickInput.foreground': shadeColor(theme.foreground, -50),
  'quickInputList.focusBackground': shadeColor(theme.background, 50),
  'quickInputList.focusForeground': theme.foreground,
  'quickInputList.focusIconForeground': shadeColor(theme.foreground, 100),
  'quickInputTitle.background': shadeColor(theme.background, 50)
});
