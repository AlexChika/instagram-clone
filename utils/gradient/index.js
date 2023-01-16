const colors = [
  {
    first: "#0000001A",
    second: "#ffffff1A",
  },
  {
    first: "#1D43501a",
    second: "#A439311a",
  },
  {
    first: "#ffffff1A",
    second: "#6dd5fa1A",
  },
  {
    first: "#ca0d0d1A",
    second: "#0584b21A",
  },

  {
    first: "#3a61861a",
    second: "#89253e1a",
  },
  {
    first: "#0213991A",
    second: "#0505051A",
  },
  {
    first: "#8e44ad1A",
    second: "#c0392b1A",
  },
  {
    first: "#20002c1A",
    second: "#cbb4d41A",
  },
  {
    first: "#F0F2F01A",
    second: "#000c401A",
  },
  {
    first: "#ADA9961A",
    second: "#F2F2F21A",
    third: "#DBDBDB1A",
    fourth: "#EAEAEA1A",
  },
  {
    first: "#1c92d21A",
    second: "#f2fcfe1A",
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
