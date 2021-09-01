const fs = require('fs');
const colors = require('./colors');
const tokenColors = require('./tokenColors');

const defaultColors = {
  colors: {
    transparent: '#FFFFFF00',
    background: '#21262D',
    foreground: '#97AFC3',
    highlight: '#983B6E',
    warning: '#FFD33D',
    untracked: '#9E6A03',
    hint: '#28A745',
    added: '#238636',
    info: '#0366d6',
    modified: '#1F6FEB',
    error: '#DA3633',
    deleted: '#D73A49'
  },
  token: {
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
  }
};

const themes = [
  {
    name: 'Pillirioen (Italics)',
    fileName: './themes/pillirioen-i.json',
    colors: colors(defaultColors.colors),
    tokenColors: tokenColors(defaultColors.token, true)
  },
  {
    name: 'Pillirioen',
    fileName: './themes/pillirioen.json',
    colors: colors(defaultColors.colors),
    tokenColors: tokenColors(defaultColors.token)
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
