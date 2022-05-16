const fs = require('fs');
const colors = require('./theme/colors');
const tokenColors = require('./theme/token-colors');

const defaultTokenColors = {
  color1: '#99FF85',
  color2: '#FF7070',
  color3: '#FF99FF',
  color4: '#70A7FF',
  color5: '#9785FF',
  color6: '#FBFF85',
  color7: '#FFBF70',
  color8: '#97AFC3',
  color9: '#75818B',
  color10: '#646A6F'
};

const defaultColors = {
  transparent: '#FFFFFF00',
  background: '#21262D',
  foreground: '#9199A1',
  highlight: '#FF206E',
  warning: '#EAC435',
  untracked: '#EAC435',
  hint: '#7DDE92',
  added: '#7DDE92',
  info: '#7F7EFF',
  modified: '#7F7EFF',
  error: '#B80C09',
  deleted: '#B80C09'
};

const themes = [
  {
    name: 'Pillirioen (Italics)',
    fileName: './themes/pillirioen-italics.json',
    colors: colors(defaultColors),
    tokenColors: tokenColors(defaultTokenColors, true)
  },
  {
    name: 'Pillirioen',
    fileName: './themes/pillirioen.json',
    colors: colors(defaultColors),
    tokenColors: tokenColors(defaultTokenColors)
  }
];

themes.forEach((theme) => {
  const jsonTheme = JSON.stringify({
    name: theme.name,
    colors: theme.colors,
    tokenColors: theme.tokenColors
  });

  fs.writeFileSync(theme.fileName, jsonTheme);
});
