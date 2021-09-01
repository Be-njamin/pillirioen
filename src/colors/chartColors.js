const { shadeColor } = require('../utils/transformColor');

// Chart Colors
// https://code.visualstudio.com/api/references/theme-color#chart-colors

module.exports = (theme) => ({
  'charts.foreground': theme.foreground,
  'charts.lines': shadeColor(theme.background, -10),
  'charts.red': '#c93c37',
  'charts.blue': '#337582',
  'charts.yellow': '#966600',
  'charts.orange': shadeColor('#966600', -25),
  'charts.green': '#347d39',
  'charts.purple': shadeColor('#337582', -25)
});
