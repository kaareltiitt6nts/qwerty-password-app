const attributes = [
    {
        id: "str",
        name: "Tugevus",
        min: 1,
        max: 5,
        values: ["rammukas", "sitke", "tugev", "vägev", "võimas"],
        weapons: [
            {icon: "../assets/img/button/icon-flamesword.png", title: "Mõõk", value:"mõõk"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Oganui", value:"oganui"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Sõjavasar", value:"sõjavasar"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Kirves", value:"kirves"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Ankur", value:"ankur"}
        ]
    },
    {
        id: "mag",
        name: "Maagia",
        min: 1,
        max: 5,
        values: ["võlur", "maagiline", "müstiline", "üleloomulik", "väekas"],
        weapons: [
            {icon: "../assets/img/button/icon-flamesword.png", title: "Tulemõõk", value:"tulemõõk"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Tormikristall", value:"tormikristall"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Varjupiits", value:"varjupiits"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Loitsuraamat", value:"loitsuraamat"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Tulesau", value:"tulesau"}
        ]
    },
    {
        id: "dex",
        name: "Väledus",
        min: 1,
        max: 5,
        values: ["ergas", "nobe", "paindlik", "väle", "osav"],
        weapons: [
            {icon: "../assets/img/button/icon-flamesword.png", title: "Rapiir", value:"rapiir"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Amb", value:"amb"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Pistoda", value:"pistoda"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Visketäht", value:"visketäht"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Vibu", value:"vibu"}
        ]
    },
    {
        id: "int",
        name: "Tarkus",
        min: 1,
        max: 5,
        values: ["arukas", "andekas", "hiilgav", "taibukas", "tark", "geniaalne"],
        weapons: [
            {icon: "../assets/img/button/icon-flamesword.png", title: "Happepudel", value:"happepudel"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Vedrutera", value:"vedrutera"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Mürginooled", value:"mürginooled"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Pomm", value:"pomm"},
            {icon: "../assets/img/button/icon-flamesword.png", title: "Tulemõõk", value:"tulemõõk"}
        ]
    }
];


const acts = [
    {
        title: "Draakoni rünnak esimene",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icon-accept.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-deny.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-question.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-sad.png", title: "Mõõk", value: "mõõk"}
        ]
    },
    {
        title: "Draakoni rünnak teine",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"}
        ]
    },
    {
        title: "Draakoni rünnak kolmas",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"}
        ]
    },
    {
        title: "Draakoni rünnak neljas",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"}
        ]
    },
    {
        title: "Draakoni rünnak viies",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"},
            {icon: "../assets/img/button/icon-run.png", title: "Mõõk", value: "mõõk"}
        ]
    },
    {
        title: "Draakoni rünnak, päriselt seekord!",
        text: "Draakon ründab küla! Võta relv ja tõtta appi! Seekord siis viimast korda. :)",
        imagePath: "../../assets/img/acts/dragon.png",
        final: true,
        choices: [] // tulevad suurima statsi relvadest
    }
]

export const GetAttributes = () => attributes
export const GetAllActs = () => acts
export const GetRandomActs = (count) => {
    const randomized = acts.sort(act => Math.random() - 0.5).filter(act => act.final !== true)
    return randomized.slice(0, count)
}
export const GetFinalAct = (highestAttributeId) => {
    if (!highestAttributeId) {
        console.log("highest attribute not given")
        return
    }

    const finalAct = acts.filter(act => act.final == true)[0]
    const weapons = attributes.find(attribute => attribute.id === highestAttributeId).weapons
    finalAct.choices = weapons

    return finalAct
}

// aitab võtta ühe attributes value väärtuse
export const getRandomAttributeValue = (attributes, highestStat) => {
    const foundAttribute = attributes.find(attr => attr.name === highestStat);
    if (!foundAttribute || !foundAttribute.values?.length) return null;
  
    return foundAttribute.values[
      Math.floor(Math.random() * foundAttribute.values.length)
    ];
  };