const { shadeColor } = require('../utils/transformColor');

// Integrated Terminal Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors

module.exports = (theme) => ({
  'terminal.background': shadeColor(theme.background, -25),
  'terminal.border': theme.transparent,
  'terminal.foreground': theme.foreground,
  'terminal.ansiBlack': '#545d68',
  'terminal.ansiBrightBlack': shadeColor('#545d68', 25),
  'terminal.ansiBlue': '#316dca',
  'terminal.ansiBrightBlue': shadeColor('#316dca', 25),
  'terminal.ansiCyan': '#337582',
  'terminal.ansiBrightCyan': shadeColor('#337582', 25),
  'terminal.ansiGreen': '#347d39',
  'terminal.ansiBrightGreen': shadeColor('#347d39', 25),
  'terminal.ansiMagenta': '#ae4c82',
  'terminal.ansiBrightMagenta': shadeColor('#ae4c82', 25),
  'terminal.ansiRed': '#c93c37',
  'terminal.ansiBrightRed': shadeColor('#c93c37', 25),
  'terminal.ansiWhite': '#cdd9e5',
  'terminal.ansiBrightWhite': shadeColor('#cdd9e5', 25),
  'terminal.ansiYellow': '#966600',
  'terminal.ansiBrightYellow': shadeColor('#966600', 25),
  'terminal.selectionBackground': shadeColor(theme.foreground, -50),
  'terminalCursor.background': theme.background,
  'terminalCursor.foreground': theme.foreground,
  'terminal.dropBackground': shadeColor(theme.background, -75),
  'terminal.tab.activeBorder': theme.transparent
});
