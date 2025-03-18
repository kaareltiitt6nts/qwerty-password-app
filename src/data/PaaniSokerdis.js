const traits = [
    {
        id: "neutral",
        name: "Neutraalne",
        values: ["ükskõikne", "tundetu", "eemalolev", "üksildane", "emotsioonitu", "rahulik"],  
    },
    {
        id: "good",
        name: "Hea",
        values: ["lahke", "hooliv", "aus", "sõbralik", "õiglane", "tore", "kannatlik", "positiivne", "õrn", "usaldusväärne", " moraalne", "arvestav"],
    },
    {
        id: "bad",
        name: "Halb",
        values: ["karm", "isekas", "ebaviisakas", "salakaval", "sadistlik", "julm", "petturlik"],    
    }
];

const getRandomTraitValue = (id) => {
    const trait = traits.find((trait) => trait.id === id);
    if (trait) {
      const randomIndex = Math.floor(Math.random() * trait.values.length);
      return trait.values[randomIndex];
    }
    return null;
  };

