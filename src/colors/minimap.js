const { alphaColor, shadeColor } = require('../utils/transformColor');

// Minimap
// https://code.visualstudio.com/api/references/theme-color#minimap

module.exports = (theme) => ({
  'minimap.findMatchHighlight': alphaColor(
    shadeColor(theme.foreground, -40),
    25
  ),
  'minimap.selectionHighlight': theme.transparent,
  'minimap.errorHighlight': theme.error,
  'minimap.warningHighlight': theme.warning,
  'minimap.background': alphaColor(shadeColor(theme.background, -50), 25),
  'minimapSlider.background': alphaColor(shadeColor(theme.background, -75), 25),
  'minimapSlider.hoverBackground': alphaColor(
    shadeColor(theme.background, -75),
    50
  ),
  'minimapSlider.activeBackground': alphaColor(
    shadeColor(theme.background, -57),
    75
  ),
  'minimapGutter.addedBackground': theme.added,
  'minimapGutter.modifiedBackground': theme.modified,
  'minimapGutter.deletedBackground': theme.deleted
});
