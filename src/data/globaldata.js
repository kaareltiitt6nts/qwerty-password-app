const attributes = [
    {
        id: "str",
        name: "Tugevus",
        min: 1,
        max: 5,
        values: ["rammukas", "sitke", "tugev", "vägev", "võimas"],
        weapons: [
            {icon: "../assets/img/button/icons/weapons/str/icon-sword.png", title: "Mõõk", value:"mõõk"},
            {icon: "../assets/img/button/icons/weapons/str/icon-mace.png", title: "Oganui", value:"oganui"},
            {icon: "../assets/img/button/icons/weapons/str/icon-warhammer.png", title: "Sõjavasar", value:"sõjavasar"},
            {icon: "../assets/img/button/icons/weapons/str/icon-axe.png", title: "Kirves", value:"kirves"},
            {icon: "../assets/img/button/icons/weapons/str/icon-anchor.png", title: "Ankur", value:"ankur"}
        ]
    },
    {
        id: "mag",
        name: "Maagia",
        min: 1,
        max: 5,
        values: ["võlur", "maagiline", "müstiline", "üleloomulik", "väekas"],
        weapons: [
            {icon: "../assets/img/button/icons/weapons/mag/icon-flamesword.png", title: "Tulemõõk", value:"tulemõõk"},
            {icon: "../assets/img/button/icons/weapons/mag/icon-stormcrystal.png", title: "Tormikristall", value:"tormikristall"},
            {icon: "../assets/img/button/icons/weapons/mag/icon-whip.png", title: "Varjupiits", value:"varjupiits"},
            {icon: "../assets/img/button/icons/weapons/mag/icon-magicbook.png", title: "Loitsuraamat", value:"loitsuraamat"},
            {icon: "../assets/img/button/icons/weapons/mag/icon-firewand.png", title: "Tulesau", value:"tulesau"}
        ]
    },
    {
        id: "dex",
        name: "Väledus",
        min: 1,
        max: 5,
        values: ["ergas", "nobe", "paindlik", "väle", "osav"],
        weapons: [
            {icon: "../assets/img/button/icons/weapons/dex/icon-rapier.png", title: "Rapiir", value:"rapiir"},
            {icon: "../assets/img/button/icons/weapons/dex/icon-crossbow.png", title: "Amb", value:"amb"},
            {icon: "../assets/img/button/icons/weapons/dex/icon-dagger.png", title: "Pistoda", value:"pistoda"},
            {icon: "../assets/img/button/icons/weapons/dex/icon-throwingstar.png", title: "Visketäht", value:"visketäht"},
            {icon: "../assets/img/button/icons/weapons/dex/icon-bow.png", title: "Vibu", value:"vibu"}
        ]
    },
    {
        id: "int",
        name: "Tarkus",
        min: 1,
        max: 5,
        values: ["arukas", "andekas", "hiilgav", "taibukas", "tark", "geniaalne"],
        weapons: [
            {icon: "../assets/img/button/icons/weapons/int/icon-acidbottle.png", title: "Happepudel", value:"happepudel"},
            {icon: "../assets/img/button/icons/misc/icon-book.png", title: "Luuleraamat", value:"luuleraamat"},
            {icon: "../assets/img/button/icons/weapons/int/icon-blowdart.png", title: "Mürginooled", value:"mürginooled"},
            {icon: "../assets/img/button/icons/weapons/int/icon-bomb.png", title: "Pomm", value:"pomm"},
            {icon: "../assets/img/button/icons/weapons/int/icon-rock.png", title: "Kivi", value:"kivi"}
        ]
    }
];


const acts = [
    {
        title: "Draakoni rünnak",
        text: "Draakon ründab küla! On toimunud kohutav laastamine! Otsustad võtte ette teekonna draakoni alistamiseks. Mis motiveerib sind enim?",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-accept.png", title: "Alistada maailmas kurjus", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-deny.png", title: "Teha tagasi, see mis sulle tehtud", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-question.png", title: "Verevalamine ajab su vere vemmeldama", value: "bad"}
        ]
    },
    {
        title: "Haavatud troll silla peal",
        text: "Jõudsid teekonnal sillani, mida tuleb ületada. Haavatud troll aeleb sillal. Mida soovid teha?",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Aita trolli kuidas võiamlik", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Jätka trolli tülitamata", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Tapa juba haavatud troll", value: "bad"}
        ]
    },
    {
        title: "Bandiidid ründavad rändureid",
        text: "Teekonnal märkad rändureid, kes on sattunud bandiitide ohvriks. Kuidas käitud olukorras?",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Kaitse rändureid bandiitide eest", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Jäta rändurid, pole su probleem", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Ründa bandiite ja siis rändureid", value: "bad"}
        ]
    },
    {
        title: "Nälgiv kass",
        text: "Puhkeajal tuleb su juurde pealtnäha näljane kass. Kuidas käitud kassiga?",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Toidad kassi oma toidu ja joogiga", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Ignoreerid kassi", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Ajad kassi sõnade ja viibetega minema", value: "bad"}
        ]
    },
    {
        title: "Kerjus teel",
        text: "Kohtad teel kerjust, kes vaatab anuvalt su poole, püüdes haarata sinust. Mida sa teed?",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Annad kerjusele nii palju, kui sul võimalik", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Jalutad mööda", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Võtad kerjuselt selle, mis tal olemas on", value: "bad"}
        ]
    },
    {
        title: "Põlev hoone",
        text: "Teekonnal läbi järgmise küla näed üht põlevat hoonet. Inimesed paaniliselt karjuvad hoone ümber. Mida sa teed?",
        imagePath: "../../assets/img/acts/burninghouse.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Tõttad abistama", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Jalutad mööda", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Lähed teistesse hoonetesse varastama", value: "bad"}
        ]
    },
    {
        title: "Õnnetu turniir",
        text: "Oma teel sattusid järgmisse külla, kus toimub vibulaskmise turniir. Oled vaatajate seas, kuid üks õnnetu vibunool liigub rahva sekka. Kuidas käitud?",
        imagePath: "../../assets/img/acts/dragon.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Üritad võimalikult palju inimesi noole teekonnalt päästa", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Jooksed eemale ja hüppad varju", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Tõmbad esimese kättesaadava inimese endale kilbiks", value: "bad"}
        ]
    },
    {
        title: "Draakoni alistamine!",
        text: "Jõudsid draakonini. Võta relv ja alista draakon! :)",
        imagePath: "../../assets/img/acts/dragon.png",
        final: true,
        choices: [] // tulevad suurima statsi relvadest
    }
]

export const GetAttributes = () => attributes
export const GetAllActs = () => acts

export const GetFirstAct = () => {
    const firstAct = acts.filter(act => act.title === "Draakoni rünnak")

    return firstAct
}

export const GetRandomActs = (count) => {
    const randomized = acts.sort(act => Math.random() - 0.5).filter(act => act.title!=="Draakoni rünnak" && act.final !== true)
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