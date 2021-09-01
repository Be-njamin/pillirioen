const { shadeColor } = require('../utils/transformColor');

// Git Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors

module.exports = (theme) => ({
  'gitDecoration.addedResourceForeground': theme.added,
  'gitDecoration.modifiedResourceForeground': theme.modified,
  'gitDecoration.deletedResourceForeground': theme.deleted,
  'gitDecoration.renamedResourceForeground': theme.modified,
  'gitDecoration.stageModifiedResourceForeground': theme.modified,
  'gitDecoration.stageDeletedResourceForeground': theme.deleted,
  'gitDecoration.untrackedResourceForeground': theme.untracked,
  'gitDecoration.ignoredResourceForeground': shadeColor(theme.foreground, -50),
  'gitDecoration.conflictingResourceForeground': theme.warning,
  'gitDecoration.submoduleResourceForeground': theme.added
});
