const { shadeColor } = require('../utils/transformColor');

// Action Colors
// https://code.visualstudio.com/api/references/theme-color#action-colors

module.exports = (theme) => ({
  'toolbar.hoverBackground': theme.background,
  'toolbar.hoverOutline': theme.transparent,
  'toolbar.activeBackground': shadeColor(theme.background, 25)
});
