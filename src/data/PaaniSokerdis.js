const traits = [
  {
    id: "neutral",
    name: "Neutraalne",
    values: [
      "ükskõikne",
      "tundetu",
      "eemalolev",
      "üksildane",
      "emotsioonitu",
      "rahulik",
    ],
  },
  {
    id: "good",
    name: "Hea",
    values: [
      "lahke",
      "hooliv",
      "aus",
      "sõbralik",
      "õiglane",
      "tore",
      "kannatlik",
      "positiivne",
      "õrn",
      "usaldusväärne",
      " moraalne",
      "arvestav",
    ],
  },
  {
    id: "bad",
    name: "Halb",
    values: [
      "karm",
      "isekas",
      "ebaviisakas",
      "salakaval",
      "sadistlik",
      "julm",
      "petturlik",
    ],
  },
];

const getRandomTraitValue = (id) => {
  const trait = traits.find((trait) => trait.id === id);
  if (trait) {
    const randomIndex = Math.floor(Math.random() * trait.values.length);
    return trait.values[randomIndex];
  }
  return null;
};

const str1 = "get1stWord";
const str2 = "get2ndWord";
const str3 = "get3rdWord";
const str4 = "get4thWord";

const finalPw = "insert logic here"
// 1 = tugevus/nobedus/mage/tarkpea
// 2 = eesnimi
// 3 = good/bad/neutral == aus / julm / rahulik
// 4 = relv == kivi / vibu / kaigas

const explainPw = `
    Andsid karakterile mille lõid kõige rohkem <b> ${highestStat} </b> punkte. Valisid karakteri nimeks <b>
    ${str2}</b>. Seikluse käigus tehtud otsused iseloomustavad sind kui <b>${str3}</b>. Relv mille abil õnnestus lõpuks draakon alistada: <b>${str4}</b>.
    Nüüd on sul visuaalne ettekujutus sinu unustamatust paroolist:<br /> ${finalPw}
`;
