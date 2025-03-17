const attributes = [
    {
        id: "str",
        name: "Tugevus",
        min: 0,
        max: 5
    },
    {
        id: "vit",
        name: "Võimsus",
        min: 0,
        max: 5
    },
    {
        id: "dex",
        name: "Väledus",
        min: 0,
        max: 5
    },
    {
        id: "int",
        name: "Tarkus",
        min: 0,
        max: 5
    }
]

const acts = [
    {
        title: "Draakoni rünnak",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"}
        ]
    },
    {
        title: "Draakoni rünnak2",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"}
        ]
    },
    {
        title: "Draakoni rünnak333",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"}
        ]
    },
    {
        title: "Draakoni rünnak4444",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"}
        ]
    },
    {
        title: "Draakoni rünnak55555",
        text: "Draakon ründab küla! Võta relv ja tõtta appi!",
        imagePath: "../../assets/img/acts/dragon.jpg",
        choices: [
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"},
            {icon: "../assets/img/sword.png", value: "fists"}
        ]
    },
]

export const GetAttributes = () => attributes
export const GetAllActs = () => acts
export const GetRandomActs = (count) => {
    const randomized = acts.sort(() => Math.random() - 0.5)
    return randomized.slice(0, count)
}