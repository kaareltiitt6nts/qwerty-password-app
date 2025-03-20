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
        values: ["arukas", "andekas", "hiilgav", "taibukas", "tark", "geniaalne", "tarkpea"],
        weapons: [
            {icon: "../assets/img/button/icons/weapons/int/icon-acidbottle.png", title: "Happepudel", value:"happepudel"},
            {icon: "../assets/img/button/icons/misc/icon-book.png", title: "Luuleraamat", value:"luuleraamat"},
            {icon: "../assets/img/button/icons/weapons/int/icon-blowdart.png", title: "Mürginooled", value:"mürginooled"},
            {icon: "../assets/img/button/icons/weapons/int/icon-bomb.png", title: "Pomm", value:"pomm"},
            {icon: "../assets/img/button/icons/weapons/int/icon-rock.png", title: "Kivi", value:"kivi"}
        ]
    }
]

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
        "moraalne",
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
    }
]

const introActs = [
    {
        title: "Elu on elamiseks!",
        text: "Oled äsja oma erialakooli lõpetanud ning valmis elama elu täiel rinnal. Mida soovid alustuseks teha?",
        imagePath: "../../assets/img/acts/cloud.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-song.png", title: "Pidutseda", value: null},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Avastada maailma", value: null},
            {icon: "../assets/img/button/icons/misc/icon-book.png", title: "Jätkata õpingutega", value: null}
        ]
    },
    {
        title: "Draakoni rünnak",
        text: "Enne kui jõuad alustada järgnevat elujärku juhtub midagi kohutavat. Draakon ründab küla! On toimunud kohutav laastamine! Otsustad võtte ette teekonna draakoni alistamiseks. Mis motiveerib sind enim?",
        imagePath: "../../assets/img/acts/village.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-fight.png", title: "Alistada maailmas kurjus", value: null},
            {icon: "../assets/img/button/icons/misc/icon-fight.png", title: "Teha tagasi see, mis sulle tehtud", value: null},
            {icon: "../assets/img/button/icons/misc/icon-fight.png", title: "Verevalamine ajab su vere vemmeldama", value: null}
        ]
    },
]

const finalAct = {
    title: "Draakoni alistamine!",
    text: "Oled jõudnud draakoni lahinguväljale, haara relv - on aeg ta hävitada!",
    imagePath: "../../assets/img/acts/dragon.png",
    isFinal: true,
    choices: [] // tulevad suurima statsi relvadest
}

const outroActs = [
    {
        title: "Draakon alistatud!",
        text: `Oled jõudnud tagasi kodukülla, kus külaelanikud sind suure hurraa ja pidustusega vastu võtavad. Suur aitäh sulle draakoni alistamises! Sinusuguseid inimesi võiks maailmas rohkem olla!`,
        imagePath: "../../assets/img/acts/cloud.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-accept.png", title: "Pidusse!", value: null},
        ]
    },
    {
        title: "Meelespea tulevikuks!",
        text: `Kurjus valitseb meid kõikjal ja interneti maailmas kaitseb sind pahalaste eest tugev parool.
        Kombineeri suuri-väikseid tähti, numbreid ja sümboleid eesmärgiga teha parool vähemalt 12 tähemärgi pikkuseks.
        Soovita seda ka teistele!`,
        imagePath: "../../assets/img/acts/computer.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-accept.png", title: "Olen ettevaatlik!", value: null},
        ]
    }
]

const acts = [
    {
        title: "Haavatud troll silla peal",
        text: "Jõudsid teekonnal sillani, mida tuleb ületada. Haavatud troll aeleb sillal. Mida soovid teha?",
        imagePath: "../../assets/img/acts/troll.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-happy.png", title: "Aita trolli kuidas võiamlik", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Jätka trolli tülitamata", value: "neutral"},
            {icon: "../assets/img/button/icons/weapons/str/icon-sword.png", title: "Tapa juba haavatud troll", value: "bad"}
        ]
    },
    {
        title: "Bandiidid ründavad rändureid",
        text: "Teekonnal märkad rändureid, kes on sattunud bandiitide ohvriks. Kuidas käitud olukorras?",
        imagePath: "../../assets/img/acts/bandits.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-shield.png", title: "Kaitse rändureid bandiitide eest", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Jäta rändurid, pole su probleem", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-fight.png", title: "Ründa bandiite ja siis rändureid", value: "bad"}
        ]
    },
    {
        title: "Nälgiv kass",
        text: "Puhkeajal tuleb su juurde pealtnäha näljane kass. Kuidas käitud kassiga?",
        imagePath: "../../assets/img/acts/cat.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-accept.png", title: "Toidad kassi oma toidu ja joogiga", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-deny.png", title: "Ignoreerid kassi", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-angry.png", title: "Ajad kassi sõnade ja viibetega minema", value: "bad"}
        ]
    },
    {
        title: "Kerjus teel",
        text: "Kohtad teel kerjust, kes vaatab anuvalt su poole, püüdes haarata sinust. Mida sa teed?",
        imagePath: "../../assets/img/acts/placeholder.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-money.png", title: "Annad kerjusele nii palju, kui sul võimalik", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Jalutad mööda", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-hand.png", title: "Võtad kerjuselt selle, mis tal olemas on", value: "bad"}
        ]
    },
    {
        title: "Põlev hoone",
        text: "Teekonnal läbi järgmise küla näed üht põlevat hoonet. Inimesed paaniliselt karjuvad hoone ümber. Mida sa teed?",
        imagePath: "../../assets/img/acts/burninghouse.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Tõttad abistama", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Jalutad mööda", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-hand.png", title: "Lähed teistesse hoonetesse varastama", value: "bad"}
        ]
    },
    {
        title: "Õnnetu turniir",
        text: "Oma teel sattusid järgmisse külla, kus toimub vibulaskmise turniir. Oled vaatajate seas, kuid üks õnnetu vibunool liigub rahva sekka. Kuidas käitud?",
        imagePath: "../../assets/img/acts/tournament.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-run.png", title: "Üritad võimalikult palju inimesi noole teekonnalt päästa", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-flee.png", title: "Jooksed eemale ja hüppad varju", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-shield.png", title: "Tõmbad esimese kättesaadava inimese endale kilbiks", value: "bad"}
        ]
    },
    {
        title: "Ennustaja",
        text: "Teekonnal kohtad üht ennustajat, kes köidab su tähelepanu. Otsustad vaatama minna, mis ta teeb. Ta jagab sulle kolm kaarti. Millise valid?",
        imagePath: "../../assets/img/acts/fortuneteller.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-sun.png", title: "Päike", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-map.png", title: "Maakaart", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-devil.png", title: "Saatan", value: "bad"}
        ]
    },
    {
        title: "Surnumatja",
        text: "Kohtad teel üht surnumatjat, kes palub sult abi ühe raskema kirstu hauda ajamiseks. Mis teed?",
        imagePath: "../../assets/img/acts/placeholder.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-happy.png", title: "Aitad", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Liigud edasi", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-angry.png", title: "Lükkad surnumatja hauda", value: "bad"}
        ]
    },
    {
        title: "Magusameister",
        text: "Läbid küla, kus möödud mesitrist, kes müüb magusat. Kas toetad meistrit?",
        imagePath: "../../assets/img/acts/placeholder.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-money.png", title: "Ostad talt magusat", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Möödud meistrist ja liigud edasi", value: "neutral"},
            {icon: "../assets/img/button/icons/misc/icon-hand.png", title: "Varastad talt", value: "bad"}
        ]
    },
    {
        title: "Tüütu teenusepakkuja",
        text: "Tee peale on sattunud sulle teenusepakkuja, kes pakub sulle saabaste hooldamist. Ta krabab sinust kinni ja palub agressiivselt su saapaid hooldada, raha eest muidugi.",
        imagePath: "../../assets/img/acts/placeholder.png",
        choices: [
            {icon: "../assets/img/button/icons/misc/icon-happy.png", title: "Võtad vastu pakkumise ja aitad meelsasti abivajat", value: "good"},
            {icon: "../assets/img/button/icons/misc/icon-walk.png", title: "Jalutad kiirel sammul edasi ja vastad: 'Ma just hooldasin'", value: "neutral"},
            {icon: "../assets/img/button/icons/weapons/str/icon-sword.png", title: "Annad tüütusele vastu pead ja röövid teda", value: "bad"}
        ]
    }

]

export const GetAttributes = () => attributes
export const GetTraits = () => traits
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

    const weapons = attributes.find(attribute => attribute.id === highestAttributeId).weapons
    finalAct.choices = weapons

    return finalAct
}

export const GetAllActs = (actCount, highestAttributeId) => {
    return [
        ...introActs,
        ...GetRandomActs(actCount),
        GetFinalAct(highestAttributeId),
        ...outroActs
    ]
}

export const getRandomAttributeValue = (highestStatId) => {
    const foundAttribute = attributes.find(attr => attr.id === highestStatId);
    if (!foundAttribute || !foundAttribute.values?.length) return null;
  
    return foundAttribute.values[Math.floor(Math.random() * foundAttribute.values.length)]
}