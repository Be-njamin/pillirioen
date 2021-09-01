const { alphaColor, shadeColor } = require('../utils/transformColor');

// Side Bar
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar

module.exports = (theme) => ({
  'sideBar.background': shadeColor(theme.background, -25),
  'sideBar.foreground': theme.foreground,
  'sideBar.border': alphaColor(shadeColor(theme.background, -50), 50),
  'sideBar.dropBackground': shadeColor(theme.background, -50),
  'sideBarTitle.foreground': theme.foreground,
  'sideBarSectionHeader.background': theme.background,
  'sideBarSectionHeader.foreground': theme.foreground,
  'sideBarSectionHeader.border': alphaColor(
    shadeColor(theme.background, -50),
    50
  )
});
