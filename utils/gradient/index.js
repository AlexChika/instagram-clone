const colors = [
  {
    first: "#0000004d",
    second: "#ffffff4d",
  },
  {
    first: "#f562174d",
    second: "#0b486b4d",
  },
  {
    first: "#ffffff33",
    second: "#6dd5fa33",
  },
  {
    first: "#ca0d0d33",
    second: "#0584b233",
  },
  {
    first: "#1f800233",
    second: "#00000033",
  },
  {
    first: "#80024133",
    second: "#142aa333",
  },
  {
    first: "#02139933",
    second: "#05050533",
  },
  {
    first: "#ff5e6233",
    second: "#ff996633",
  },
];

function getGradient() {
  const length = colors.length;
  const index = Math.floor(Math.random() * length);
  const color = colors[index];

  return `linear-gradient(
    253deg,
    ${color.first},
    ${color.second}
  )`;
}

export default getGradient;
