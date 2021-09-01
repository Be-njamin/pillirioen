const { alphaColor, shadeColor } = require('../utils/transformColor');

// Snippets
// https://code.visualstudio.com/api/references/theme-color#snippets

module.exports = (theme) => ({
  'editor.snippetTabstopHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -15),
    20
  ),
  'editor.snippetTabstopHighlightBorder': theme.transparent,
  'editor.snippetFinalTabstopHighlightBackground': alphaColor(
    shadeColor(theme.foreground, -15),
    40
  ),
  'editor.snippetFinalTabstopHighlightBorder': theme.transparent
});
