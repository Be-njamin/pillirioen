const { shadeColor } = require('../utils/transformColor');

// Welcome Page
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page

module.exports = (theme) => ({
  'welcomePage.background': theme.background,
  'welcomePage.buttonBackground': theme.highlight,
  'welcomePage.buttonHoverBackground': shadeColor(theme.highlight, -10),
  'welcomePage.progress.background': shadeColor(theme.background, -50),
  'welcomePage.progress.foreground': theme.highlight,
  'welcomePage.tileBackground': shadeColor(theme.background, -25),
  'welcomePage.tileHoverBackground': shadeColor(theme.background, -15),
  'walkThrough.embeddedEditorBackground': shadeColor(theme.background, -25)
});
