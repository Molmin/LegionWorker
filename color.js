
const colors = [
    '#ff2a23',
    '#ff3f1f',
    '#ff531a',
    '#ff6816',
    '#ff7c12',
    '#ff910d',
    '#ffa509',
    '#ffba04',
    '#ffce00',
    '#d8d700',
    '#b0e000',
    '#89e900',
    '#62f200',
    '#3bfb00',
    '#23ee17',
    '#1ccc46',
    '#19bb5d',
    '#15aa74',
    '#12998b',
    '#0e88a2',
    '#0b77b9',
    '#0766d1',
    '#0455e8',
    '#0044ff',
    '#1639ff',
    '#2c2dff',
    '#4322ff',
    '#5917ff',
    '#6f0bff',
    '#8500ff',
    '#8500ff',
    '#9805ff',
    '#ab09ff',
    '#bf0eff',
    '#d213ff',
    '#e517ff',
    '#f81cff',
  ]; module.exports = {
    getColor: score => {
      var min = 0, max = 630, level;
      level = (score - min) / ((max - min) / (colors.length - 1));
      level = Math.floor(level);
      if (level < 0) level = 0;
      if (level >= colors.length) level = colors.length - 1;
      return colors[level];
    },
    Colors: colors
  }