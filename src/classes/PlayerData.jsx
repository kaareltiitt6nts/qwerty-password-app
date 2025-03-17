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

  getHighestAttribute = () => {
    return 
  }
}