const { shadeColor } = require('../utils/transformColor');

// Text colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#text-colors

module.exports = (theme) => ({
  'textBlockQuote.background': shadeColor(theme.background, -10),
  'textBlockQuote.border': theme.highlight,
  'textCodeBlock.background': shadeColor(theme.background, -25),
  'textLink.activeForeground': theme.highlight,
  'textLink.foreground': theme.highlight,
  'textPreformat.foreground': theme.foreground,
  'textSeparator.foreground': theme.foreground
});
