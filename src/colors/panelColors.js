const { shadeColor } = require('../utils/transformColor');

// Panel Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors

module.exports = (theme) => ({
  'panel.background': theme.background,
  'panel.border': shadeColor(theme.background, 25),
  'panel.dropBorder': theme.transparent,
  'panelTitle.activeBorder': theme.foreground,
  'panelTitle.activeForeground': theme.foreground,
  'panelTitle.inactiveForeground': shadeColor(theme.foreground, -50),
  'panelInput.border': theme.transparent,
  'panelSection.border': theme.transparent,
  'panelSection.dropBackground': shadeColor(theme.background, 25),
  'panelSectionHeader.background': shadeColor(theme.background, -25),
  'panelSectionHeader.foreground': theme.foreground,
  'panelSectionHeader.border': theme.transparent
});
