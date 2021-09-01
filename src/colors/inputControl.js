const { alphaColor, shadeColor } = require('../utils/transformColor');

// Input Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control

module.exports = (theme) => ({
  'input.background': shadeColor(theme.background, -50),
  'input.border': alphaColor(shadeColor(theme.background, -50), 50),
  'input.foreground': theme.foreground,
  'input.placeholderForeground': shadeColor(theme.foreground, -50),
  'inputOption.activeBackground': theme.transparent,
  'inputOption.activeBorder': theme.transparent,
  'inputOption.activeForeground': theme.foreground,
  'inputValidation.errorBackground': shadeColor(theme.background, -50),
  'inputValidation.errorForeground': theme.error,
  'inputValidation.errorBorder': theme.error,
  'inputValidation.infoBackground': shadeColor(theme.background, -50),
  'inputValidation.infoForeground': theme.info,
  'inputValidation.infoBorder': theme.info,
  'inputValidation.warningBackground': shadeColor(theme.background, -50),
  'inputValidation.warningForeground': theme.warning,
  'inputValidation.warningBorder': theme.warning
});
