const colors = [
  {
    first: "#00000033",
    second: "#ffffff33",
  },
  {
    first: "#1D435033",
    second: "#A4393133",
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
    first: "#c6ffdd33",
    second: "#fbd78633",
    third: "#f7797d33",
  },
  {
    first: "#02139933",
    second: "#05050533",
  },
  {
    first: "#8e44ad33",
    second: "#c0392b33",
  },
  {
    first: "#12c2e933",
    second: "#c471ed33",
    third: "#f64f5933",
  },
  {
    first: "#1e960033",
    second: "#fff20033",
    third: "#ff000033",
  },
  {
    first: "#3a1c7133",
    second: "#d76d7733",
    third: "#ffaf7b33",
  },
  {
    first: "#1c92d233",
    second: "#f2fcfe33",
  },
  {
    first: "#833ab433",
    second: "#fd1d1d33",
    third: "#fcb04533",
  },
];

function getGradient() {
  const length = colors.length;
  const index = Math.floor(Math.random() * length);
  const color = colors[index];
  const all = Object.values(color);

  return `linear-gradient(
    253deg,
    ${all}
  )`;
}

export default getGradient;
