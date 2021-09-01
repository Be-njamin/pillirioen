const { alphaColor, shadeColor } = require('../utils/transformColor');

// Merge Conflicts
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts

module.exports = (theme) => ({
  'merge.currentHeaderBackground': theme.added,
  'merge.currentContentBackground': alphaColor(theme.added, 50),
  'merge.incomingHeaderBackground': theme.info,
  'merge.incomingContentBackground': alphaColor(theme.info, 50),
  'merge.border': theme.background,
  'merge.commonContentBackground': shadeColor(theme.added, -25),
  'merge.commonHeaderBackground': theme.added,
  'editorOverviewRuler.currentContentForeground': theme.transparent,
  'editorOverviewRuler.incomingContentForeground': theme.transparent,
  'editorOverviewRuler.commonContentForeground': theme.transparent
});
