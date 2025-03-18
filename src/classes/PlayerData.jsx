export class PlayerData {
  constructor(name, attributes) {
    this.name = name
    this.weapon = null
    this.attributes = attributes
    this.keywords = []
  }

  addKeyword = (keyword) => {
    this.keywords.push(keyword)
  }

  generatePassword = () => {
    const pw = this.keywords.reduce((acc, val) => acc = acc + val, "")

    console.log(pw)

    return pw
  }

  getHighestAttributeId = () => {
    // ?????????????????
    const highestAttribute = Object.entries(this.attributes).sort(([, a], [, b]) => b - a)[0]

    return highestAttribute[0]
  }
}