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
]

export const GetTraits = () => traits

const getRandomTraitValue = (id) => {
  const trait = traits.find((trait) => trait.id === id);
  if (trait) {
    const randomIndex = Math.floor(Math.random() * trait.values.length);
    return trait.values[randomIndex];
  }
  return null;
};

const str1 = highestStat;
const str2 = "get2ndWord";
const str3 = "get3rdWord";
const str4 = "get4thWord";

// 1 = tugevus/nobedus/mage/tarkpea
// 2 = eesnimi
// 3 = good/bad/neutral == aus / julm / rahulik
// 4 = relv == kivi / vibu / kaigas

const explainPw = `
    Andsid karakterile mille lõid kõige rohkem <b> ${attributeWord} </b> punkte. Valisid karakteri nimeks <b>
    ${firstNameWord}</b>. Seikluse käigus tehtud otsused iseloomustavad sind kui <b>${choicesWord}</b>. Relv mille abil õnnestus lõpuks draakon alistada: <b>${weaponWord}</b>.
    Nüüd on sul visuaalne ettekujutus sinu unustamatust paroolist:<br /> ${pw}
`;

/*
words.forEach(word => toTitle(word))??????

function toTitle(str) {
  if (!str) {
      return ""
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
*/

const finalPw = `${transformString(str1)}${transformString(str2)}${transformString(str3)}${transformString(str4)}`;
