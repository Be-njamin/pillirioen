const { shadeColor } = require('../utils/transformColor');

// Banner Colors
// https://code.visualstudio.com/api/references/theme-color#banner-colors

module.exports = (theme) => ({
  'banner.background': shadeColor(theme.background, -50),
  'banner.foreground': theme.foreground,
  'banner.iconForeground': theme.foreground
});
