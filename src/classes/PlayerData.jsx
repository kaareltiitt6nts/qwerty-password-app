import { GetAttributes, getRandomAttributeValue , GetTraits } from "../data/globaldata"


export class PlayerData {
  constructor(name) {
    this.name = name
    this.weapon = null
    this.attributes = {}
    this.choices = {}
    this.words = {}
  }

  addChoice = (choiceType) => {
    if (!choiceType) return

    const choice = this.choices[choiceType]

    if (choice != undefined) {
      this.choices[choiceType] += 1
    }
    else {
      this.choices[choiceType] = 1
    }

    console.log(this.choices)
  }

  setWeapon = (weapon) => {
    console.log(`Setting weapon to ${weapon}`)
    this.weapon = weapon
  }

  setAttributes = (attributes) => {
    this.attributes = attributes
    console.log(this.attributes)
  }

  getWords = () => this.words

  generatePassword = () => {
    const words = []

    // karakterist tulenevad sõnad
    const attributeWord = getRandomAttributeValue(this.getHighestAttributeId())
    const firstNameWord = this.name.split(" ")[0]
    const weaponWord = this.weapon

    // mänguvalikutest tulenevad sõnad
    const highestChoice = Object.keys(this.choices).reduce((a, b) => this.choices[a] > this.choices[b] ? a : b)
    const choiceWords = GetTraits().find(trait => trait.id === highestChoice).values
    const choiceWord = choiceWords[Math.floor(Math.random() * choiceWords.length)]

    words.push(attributeWord, firstNameWord, choiceWord, weaponWord)

    const formattedWords = words.map(word => {
      return word.toLowerCase()
      .replace(/ö/g, "8")
      .replace(/õ/g, "6")
      .replace(/ä/g, "2")
      .replace(/ü/g, "y")
      .replace(/^\w/, (char) => char.toUpperCase())
    })

    console.log(formattedWords)
    this.words = {
      attributeWord: GetAttributes().find(attribute => attribute.id === this.getHighestAttributeId()).name.toLowerCase(), 
      firstNameWord: firstNameWord, 
      weaponWord: weaponWord, 
      choicesWord: GetTraits().find(trait => trait.id === highestChoice).name.toLowerCase()
    }
    console.log(this.words)
    return formattedWords.join("")
  }

  getHighestAttributeId = () => {
    // ????????????????? isegi ma ei oska öelda mis see tegema peaks -kaarel
    const highestAttribute = Object.entries(this.attributes).sort(([, a], [, b]) => b - a)[0]

    return highestAttribute[0]
  }
}