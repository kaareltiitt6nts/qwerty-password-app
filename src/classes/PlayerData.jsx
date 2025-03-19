import { getRandomAttributeValue , GetTraits } from "../data/globaldata"


export class PlayerData {
  constructor(name, attributes) {
    this.name = name
    this.weapon = null
    this.attributes = attributes
    this.keywords = []
  }

  addKeyword = (keyword) => {
    if (!keyword) return
    this.keywords.push(keyword)
  }

  setWeapon = (weapon) => {
    console.log(`Setting weapon to ${weapon}`)
    this.weapon = weapon
  }

  generatePassword = () => {
    // loendad keywordid kokku
    // weapon
    // highest attribute id -> sokerdis/globaldata
    // name -> this.name.split(" ")[0]
    // finalresult pw regex
    const words = []
    const choicesMade = {}
    const attributeWord = getRandomAttributeValue(this.getHighestAttributeId())
    const firstNameWord = this.name.split(" ")[0]
    const weaponWord = this.weapon

    words.push(attributeWord, firstNameWord, "", weaponWord)

    console.log(words)
    const formattedWords = []
    words.forEach(word => {
      const formattedWord = word.toLowerCase()
      .replace(/ö/g, "8")
      .replace(/õ/g, "6")
      .replace(/ä/g, "2")
      .replace(/ü/g, "y")
      .replace(/\b\w/g, (char) => char.toUpperCase())
      formattedWords.push(formattedWord)
    })

    this.keywords.forEach(choice => {
      if (choicesMade[choice]) {
        choicesMade[choice] += 1
      }
      else {
        choicesMade[choice] = 1
      }
    })
    const highestTrait = Object.entries(this.keywords).sort(([, a], [, b]) => b - a)[0][1]
    const traitWords = GetTraits().find(trait => trait.id === highestTrait).values
    words[2] = traitWords[Math.random() * traitWords.length - 1]

    const pw = formattedWords.join("")
    return pw
  }

  getHighestAttributeId = () => {
    // ?????????????????
    const highestAttribute = Object.entries(this.attributes).sort(([, a], [, b]) => b - a)[0]

    return highestAttribute[0]
  }
}