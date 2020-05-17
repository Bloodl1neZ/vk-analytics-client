export const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return {r, g, b};
};

const colors = [
  {
    r: 236,
    g: 112,
    b: 99,
  },
  {
    r: 175,
    g: 122,
    b: 197,
  },
  {
    r: 93,
    g: 173,
    b: 226,
  },
  {
    r: 72,
    g: 201,
    b: 176,
  },
  {
    r: 69,
    g: 179,
    b: 157,
  },
  {
    r: 244,
    g: 208,
    b: 63,
  },
  {
    r: 245,
    g: 176,
    b: 65,
  },
  {
    r: 220,
    g: 118,
    b: 51,
  },
  {
    r: 245,
    g: 203,
    b: 167,
  },
  {
    r: 174,
    g: 214,
    b: 241,
  },
];

export const generateColors = () => {
  colors.sort(() => Math.random() - 0.5);
  const backgroundColor = colors.map(({r, g, b}) => `rgba(${r},${g},${b}, 1)`);
  const hoverBackgroundColor = colors.map(
      ({r, g, b}) => `rgba(${r},${g},${b}, 1)`);
  const borderColor = colors.map(({r, g, b}) => `rgba(${r},${g},${b}, 1)`);
  return {
    backgroundColor,
    hoverBackgroundColor,
    borderColor,
    hoverBorderColor: borderColor,
  };
};

export const VIEW_TYPES = {
  HORIZONTAL_BAR: 'horizontalBar',
  LIST: 'list',
};
