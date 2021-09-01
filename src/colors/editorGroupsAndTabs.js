const { alphaColor, shadeColor } = require('../utils/transformColor');

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = (theme) => ({
  'editorGroup.border': alphaColor(shadeColor(theme.background, -50), 50),
  'editorGroup.dropBackground': alphaColor(
    shadeColor(theme.background, -50),
    50
  ),
  'editorGroupHeader.tabsBackground': shadeColor(theme.background, -100),
  'editorGroupHeader.noTabsBackground': shadeColor(theme.background, -100),
  'editorGroup.emptyBackground': alphaColor(
    shadeColor(theme.background, -100),
    50
  ),
  'tab.activeBackground': theme.background,
  'tab.activeForeground': theme.foreground,
  'tab.unfocusedActiveBackground': shadeColor(theme.background, -50),
  'tab.unfocusedActiveForeground': shadeColor(theme.foreground, -50),
  'tab.inactiveBackground': shadeColor(theme.background, -50),
  'tab.inactiveForeground': shadeColor(theme.foreground, -50),
  'tab.unfocusedInactiveBackground': shadeColor(theme.background, -75),
  'tab.unfocusedInactiveForeground': shadeColor(theme.foreground, -75),
  'tab.hoverBackground': theme.background,
  'tab.hoverForeground': theme.foreground,
  'tab.unfocusedHoverBackground': shadeColor(theme.background, -40),
  'tab.unfocusedHoverForeground': shadeColor(theme.foreground, -40),
  'editorGroup.focusedEmptyBorder': theme.transparent,
  'editorGroupHeader.border': theme.transparent,
  'editorGroupHeader.tabsBorder': shadeColor(theme.background, -50),
  'tab.border': alphaColor(shadeColor(theme.background, -50), 50),
  'tab.hoverBorder': theme.transparent,
  'tab.activeBorder': alphaColor(shadeColor(theme.background, -50), 50),
  'tab.activeBorderTop': theme.highlight,
  'tab.unfocusedActiveBorder': theme.transparent,
  'tab.unfocusedActiveBorderTop': shadeColor(theme.highlight, -50),
  'tab.lastPinnedBorder': theme.transparent,
  'tab.unfocusedHoverBorder': theme.transparent,
  'tab.activeModifiedBorder': theme.transparent,
  'tab.inactiveModifiedBorder': theme.transparent,
  'tab.unfocusedActiveModifiedBorder': theme.transparent,
  'tab.unfocusedInactiveModifiedBorder': theme.transparent,
  'editorPane.background': theme.background
});
