class Character {
  constructor(id, name, race, charClass, abilities = {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0}) {
    this.id = id;
    this.name = name;
    this.race  = race;
    this.charClass = charClass;
    this.abilities = abilities;
    console.log(`Constructing a ${this.getRaceName()} ${this.getCharClassName()} named ${this.getName()}`);
  }

  //Getters
  getId = () => this.id;
  getName = () => this.name;
  getRaceIndex = () => this.race;
  getRaceName = () => Character.getRaceByIndex(this.race);
  getCharClassIndex = () => this.charClass;
  getCharClassName = () => Character.getCharClassByIndex(this.charClass);
  getAbilities = () => this.abilities;
  getStrength = () => this.abilities.strength;
  getDexterity = () => this.abilities.dexterity;
  getConstitution = () => this.abilities.constitution;
  getIntelligence = () => this.abilities.intelligence;
  getWisdom = () => this.abilities.wisdom;
  getCharisma = () => this.abilities.charisma;

  //Setters
  setName = (newName) => this.name = newName;
  setRaceIndex = (newRaceIndex) => this.race = newRaceIndex;
  setCharClassIndex = (newCharClassIndex) => this.charClass = newCharClassIndex;
  setStrength = (newStrength) => this.abilities.strength = newStrength;
  setDexterity = (newDexterity) => this.abilities.dexterity = newDexterity;
  setConstitution = (newConstitution) => this.abilities.constitution = newConstitution;
  setIntelligence = (newIntelligence) => this.abilities.intelligence = newIntelligence;
  setWisdom = (newWisdom) => this.abilities.wisdom = newWisdom;
  setCharisma = (newCharisma) => this.abilities.charisma = newCharisma;

  //takes a newly generated class and randomly generates abilities, then updates the abilities based on race and class assignments
  updateAbilities = () => {
    console.log(`Updating ${this.getName()}'s abilities.`);
    const abilityChoices = Character.generateRandomAbilities();
    console.log(`Ability roles: ${abilityChoices}`);

    switch (parseInt(this.getCharClassIndex())) {
      case 0: //barbarian
        console.log(`Barbarian-- strength and constitution`)
        this.setStrength(abilityChoices.shift());
        this.setConstitution(abilityChoices.shift());
        this.setDexterity(abilityChoices.shift());
        this.setCharisma(abilityChoices.shift());
        this.setWisdom(abilityChoices.shift());
        this.setIntelligence(abilityChoices.shift());
        break;
      case 1: //bard
        console.log(`Bard-- charisma and dexterity`);
        this.setStrength(abilityChoices[5]);
        this.setDexterity(abilityChoices[1]);
        this.setConstitution(abilityChoices[2]);
        this.setIntelligence(abilityChoices[4]);
        this.setWisdom(abilityChoices[3]);
        this.setCharisma(abilityChoices[0]);
        break;
      case 2: //cleric
        console.log(`Cleric-- wisdom and strength`);
        this.setStrength(abilityChoices[1]);
        this.setDexterity(abilityChoices[3]);
        this.setConstitution(abilityChoices[2]);
        this.setIntelligence(abilityChoices[5]);
        this.setWisdom(abilityChoices[0]);
        this.setCharisma(abilityChoices[4]);
        break;
      case 3: //druid
        console.log(`Druid-- wisdom and constitution`);
        this.setStrength(abilityChoices[4]);
        this.setDexterity(abilityChoices[5]);
        this.setConstitution(abilityChoices[1]);
        this.setIntelligence(abilityChoices[2]);
        this.setWisdom(abilityChoices[0]);
        this.setCharisma(abilityChoices[3]);
        break;
      case 4: //fighter
        console.log(`Fighter-- strength and constitution`);
        this.setStrength(abilityChoices[0]);
        this.setDexterity(abilityChoices[2]);
        this.setConstitution(abilityChoices[1]);
        this.setIntelligence(abilityChoices[3]);
        this.setWisdom(abilityChoices[4]);
        this.setCharisma(abilityChoices[5]);
        break;
      case 5: //monk
        console.log(`Monk-- dexterity and wisdom`);
        this.setStrength(abilityChoices[3]);
        this.setDexterity(abilityChoices[0]);
        this.setConstitution(abilityChoices[2]);
        this.setIntelligence(abilityChoices[5]);
        this.setWisdom(abilityChoices[1]);
        this.setCharisma(abilityChoices[4]);
        break;
      case 6: //paladin
        console.log(`Paladin-- strength and charisma`);
        this.setStrength(abilityChoices[0]);
        this.setDexterity(abilityChoices[3]);
        this.setConstitution(abilityChoices[2]);
        this.setIntelligence(abilityChoices[5]);
        this.setWisdom(abilityChoices[4]);
        this.setCharisma(abilityChoices[1]);
        break;
      case 7: //ranger
        console.log(`Ranger-- dexterity and wisdom`);
        this.setStrength(abilityChoices[2]);
        this.setDexterity(abilityChoices[0]);
        this.setConstitution(abilityChoices[3]);
        this.setIntelligence(abilityChoices[5]);
        this.setWisdom(abilityChoices[1]);
        this.setCharisma(abilityChoices[4]);
        break;
      case 8: //rogue
        console.log(`Rogue-- dexterity and intelligence`);
        this.setStrength(abilityChoices[4]);
        this.setDexterity(abilityChoices[0]);
        this.setConstitution(abilityChoices[3]);
        this.setIntelligence(abilityChoices[1]);
        this.setWisdom(abilityChoices[5]);
        this.setCharisma(abilityChoices[2]);
        break;
      case 9: //sorcerer
        console.log(`Sorcerer-- charisma and constitution`);
        this.setStrength(abilityChoices[5]);
        this.setDexterity(abilityChoices[3]);
        this.setConstitution(abilityChoices[1]);
        this.setIntelligence(abilityChoices[2]);
        this.setWisdom(abilityChoices[4]);
        this.setCharisma(abilityChoices[0]);
        break;
      case 10: //warlock
        console.log(`Warlock-- charisma and constitution`);
        this.setStrength(abilityChoices[3]);
        this.setDexterity(abilityChoices[2]);
        this.setConstitution(abilityChoices[1]);
        this.setIntelligence(abilityChoices[4]);
        this.setWisdom(abilityChoices[5]);
        this.setCharisma(abilityChoices[0]);
        break;
      case 11: //wizard
        console.log(`Wizard-- intelligence and constitution`);
        this.setStrength(abilityChoices[5]);
        this.setDexterity(abilityChoices[2]);
        this.setConstitution(abilityChoices[1]);
        this.setIntelligence(abilityChoices[0]);
        this.setWisdom(abilityChoices[4]);
        this.setCharisma(abilityChoices[3]);
        break;
    }

    console.log(`Strength: ${this.getStrength()}`);
    console.log(`Dexterity: ${this.getDexterity()}`);
    console.log(`Constitution: ${this.getConstitution()}`);
    console.log(`Intelligence: ${this.getIntelligence()}`);
    console.log(`Wisdom: ${this.getWisdom()}`);
    console.log(`Charisma: ${this.getCharisma()}`);

    switch (parseInt(this.getRaceIndex())) {
      case 0: //dwarf
        console.log(`Dwarf-- const +2`);
        this.setConstitution(this.getConstitution() + 2);
        break;
      case 1: //elf
      console.log(`Elf-- dex +2`);
        this.setDexterity(this.getDexterity() + 2);
        break;
      case 2: //halfling
      console.log(`Halfling-- dex +2`);
        this.setDexterity(this.getDexterity() + 2);
        break;
      case 3: //human
      console.log(`Human-- all +1`);
        this.setStrength(this.getStrength() + 1);
        this.setDexterity(this.getDexterity() + 1);
        this.setConstitution(this.getConstitution() + 1);
        this.setIntelligence(this.getIntelligence() + 1);
        this.setWisdom(this.getWisdom() + 1);
        this.setCharisma(this.getCharisma() + 1);
        break;
      case 4: //dragonborn
      console.log(`Dragonborn-- str +2, char +1`);
        this.setStrength(this.getStrength() + 2);
        this.setCharisma(this.getCharisma() + 1);
        break;
      case 5: //gnome
      console.log(`Gnome-- int +2`);
        this.setIntelligence(this.getIntelligence() + 2);
        break;
      case 6: //half-elf
      console.log(`Half-elf-- char +2`);
        this.setCharisma(this.getCharisma() + 2);
        break;
      case 7: //half-orc
      console.log(`Half-orc-- str +2, const +1`);
        this.setStrength(this.getStrength() + 2);
        this.setConstitution(this.getConstitution() + 1);
        break;
      case 8: //tiefling
      console.log(`Tiefling-- int +1, char +2`);
        this.setIntelligence(this.getIntelligence() + 1);
        this.setCharisma(this.getCharisma() + 2);
        break;
    }

    console.log(`Strength: ${this.getStrength()}`);
    console.log(`Dexterity: ${this.getDexterity()}`);
    console.log(`Constitution: ${this.getConstitution()}`);
    console.log(`Intelligence: ${this.getIntelligence()}`);
    console.log(`Wisdom: ${this.getWisdom()}`);
    console.log(`Charisma: ${this.getCharisma()}`);
  }

  //STATICS
  static getRaceByIndex(index) {
    const raceNames = [
      "Dwarf",
      "Elf",
      "Halfling",
      "Human",
      "Dragonborn",
      "Gnome",
      "Half-Elf",
      "Half-Orc",
      "Tiefling"
    ];
    return raceNames[index];
  }

  static getCharClassByIndex(index) {
    const charClassNames = [
      "Barbarian",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Paladin",
      "Ranger",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ];
    return charClassNames[index];
  }

  // returns random value for single character ability using the same logic as specified in D&D Player's Handbook
  // roll four six-sided dice, sum three highest rolls (possible numbers 3 - 18)
  static generateRandomAbility() {
    const sums4d6Rolls = [];

    for(let i = 0; i < 4; i++) {
      sums4d6Rolls.push(Math.floor(Math.random() * 6) + 1);
    }

    sums4d6Rolls.sort((a, b) => b - a);

    return sums4d6Rolls[0] + sums4d6Rolls[1] + sums4d6Rolls[2];
  }

  // returns array of six abilities in descending order to be used in random character generation as specified in D&D Player's Handbook
  // abilities randomly generated by getAbility function, so possible return values is array with six numbers each from 3 - 18 inclusive
  static generateRandomAbilities() {
    console.log('Getting random abilities');
    const randomAbilities = [];

    for(let i = 0; i < 6; i++) {
      randomAbilities.push(Character.generateRandomAbility());
    }
    randomAbilities.sort((a, b) => b - a);
    console.log(randomAbilities);
    return randomAbilities;
  }
}

export {Character};