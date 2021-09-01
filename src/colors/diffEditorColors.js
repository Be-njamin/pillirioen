const { alphaColor, shadeColor } = require('../utils/transformColor');

// Diff Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors

module.exports = (theme) => ({
  'diffEditor.insertedTextBackground': alphaColor(theme.added, 20),
  'diffEditor.insertedTextBorder': theme.transparent,
  'diffEditor.removedTextBackground': alphaColor(theme.deleted, 20),
  'diffEditor.removedTextBorder': theme.transparent,
  'diffEditor.border': theme.transparent,
  'diffEditor.diagonalFill': shadeColor(theme.background, -50)
});
