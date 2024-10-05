const nome = "Jonathan";
const xp = 10001;

const levels = [
  { threshold: 1000, level: "Ferro" },
  { threshold: 2000, level: "Bronze" },
  { threshold: 5000, level: "Prata" },
  { threshold: 7000, level: "Ouro" },
  { threshold: 8000, level: "Platina" },
  { threshold: 9000, level: "Ascendente" },
  { threshold: 10000, level: "Imortal" },
  { threshold: Infinity, level: "Radiante" }
];

const getLevel = (xp) =>
  levels.find(({ threshold }) => xp <= threshold);

const { level } = getLevel(xp);

console.log(`O Herói ${nome} está no nível de ${level}!`);