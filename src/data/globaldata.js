const attributes = [
    {
        id: "str",
        name: "Tugevus",
        min: 1,
        max: 5,
        values: ["rammukas", "sitke", "tugev", "vägev", "võimas"],
        weapons: [
            {icon: "../assets/img/button/icon-firesword.png", name: "Mõõk", value:"mõõk"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Oganui", value:"oganui"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Sõjavasar", value:"sõjavasar"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Kirves", value:"kirves"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Ankur", value:"ankur"}
        ]
    },
    {
        id: "mag",
        name: "Maagia",
        min: 1,
        max: 5,
        values: ["võlur", "maagiline", "müstiline", "üleloomulik", "väekas"],
        weapons: [
            {icon: "../assets/img/button/icon-firesword.png", name: "Tulemõõk", value:"tulemõõk"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Tormikristall", value:"tormikristall"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Varjupiits", value:"varjupiits"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Loitsuraamat", value:"loitsuraamat"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Tulesau", value:"tulesau"}
        ]
    },
    {
        id: "dex",
        name: "Väledus",
        min: 1,
        max: 5,
        values: ["ergas", "nobe", "paindlik", "väle", "osav"],
        weapons: [
            {icon: "../assets/img/button/icon-firesword.png", name: "Rapiir", value:"rapiir"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Amb", value:"amb"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Viskenoad", value:"viskenoad"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Visketäht", value:"visketäht"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Vibu", value:"vibu"}
        ]
    },
    {
        id: "int",
        name: "Tarkus",
        min: 1,
        max: 5,
        values: ["arukas", "andekas", "hiilgav", "taibukas", "tark", "geniaalne"],
        weapons: [
            {icon: "../assets/img/button/icon-firesword.png", name: "Happepudel", value:"happepudel"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Vedrutera", value:"vedrutera"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Mürginooled", value:"mürginooled"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Pomm", value:"pomm"},
            {icon: "../assets/img/button/icon-firesword.png", name: "Tulemõõk", value:"tulemõõk"}
        ]
    }
];


const acts = [
    {
        title: "Draakoni rünnak esimene",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/button/icon-accept.png", value: "sword"},
            {icon: "../assets/img/button/icon-deny.png", value: "sword"},
            {icon: "../assets/img/button/icon-question.png", value: "sword"},
            {icon: "../assets/img/button/icon-sad.png", value: "sword"}
        ]
    },
    {
        title: "Draakoni rünnak teine",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"}
        ]
    },
    {
        title: "Draakoni rünnak kolmas",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"}
        ]
    },
    {
        title: "Draakoni rünnak neljas",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"}
        ]
    },
    {
        title: "Draakoni rünnak viies",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"}
        ]
    },
    {
        title: "Draakoni rünnak viimane",
        text: "Draakon ründab küla! Võta relv ja tõtta appi! aga viimane",
        imagePath: "../../assets/img/acts/dragon.jpg",
        final: true,
        choices: [
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"},
            {icon: "../assets/img/button/icon-run.png", value: "sword"}
        ]
    }
]

export const GetAttributes = () => attributes
export const GetAllActs = () => acts
export const GetRandomActs = (count) => {
    const randomized = acts.sort().filter(act => act.final !== true)
    return randomized.slice(0, count)
}
// aitab võtta ühe attributes value väärtuse
export const getRandomAttributeValue = (attributes, highestStat) => {
    const foundAttribute = attributes.find(attr => attr.name === highestStat);
    if (!foundAttribute || !foundAttribute.values?.length) return null;
  
    return foundAttribute.values[
      Math.floor(Math.random() * foundAttribute.values.length)
    ];
  };