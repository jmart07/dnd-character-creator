class Character {
  constructor(name, race, charClass) {
    this.name = name;
    this.race  = race;
    this.charClass = charClass;
    this.abilities = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
    console.log(`Creating a ${this.getRaceName()} ${this.getCharClassName()} named ${this.getName()}`);
    this.updateAbilities();
  }

getName = () => {
  return this.name;
}
setName = (newName) => {
  this.name = newName;
}
getRaceIndex = () => {
  return this.race;
}
setRaceIndex = (newRaceIndex) => {
  this.race = newRaceIndex;
}
getRaceName = () => {
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
  return raceNames[this.race];
}
getCharClassIndex = () => {
  return this.charClass;
}
setCharClassIndex = (newCharClassIndex) => {
  this.charClass = newCharClassIndex;
}
getCharClassName = () => {
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

  return charClassNames[this.charClass];
}
getAbilities = () => {
  return this.abilities;
}
getStrength = () => {
  return this.abilities.strength;
}
getDexterity = () => {
  return this.abilities.dexterity;
}
getConstitution = () => {
  return this.abilities.constitution;
}
getIntelligence = () => {
  return this.abilities.intelligence;
}
getWisdom = () => {
  return this.abilities.wisdom;
}
getCharisma = () => {
  return this.abilities.charisma;
}
setStrength = (newStrength) => {
  this.abilities.strength = newStrength;
}
setDexterity = (newDexterity) => {
  this.abilities.dexterity = newDexterity;
}
setConstitution = (newConstitution) => {
  this.abilities.constitution = newConstitution;
}
setIntelligence = (newIntelligence) => {
  this.abilities.intelligence = newIntelligence;
}
setWisdom = (newWisdom) => {
  this.abilities.wisdom = newWisdom;
}
setCharisma = (newCharisma) => {
  this.abilities.charisma = newCharisma;
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

updateAbilities = () => {
  console.log(`Updating ${this.getName()}'s abilities.`);
  const abilityChoices = Character.generateRandomAbilities();
  console.log(`Ability roles: ${abilityChoices}`);

  switch (this.charClass) {
    case 0: //barbarian
      console.log(`Barbarian-- strength and constitution`)
      this.abilities.strength = abilityChoices.shift();
      this.abilities.constitution = abilityChoices.shift();
      this.abilities.dexterity = abilityChoices.shift();
      this.abilities.charisma = abilityChoices.shift();
      this.abilities.wisdom = abilityChoices.shift();
      this.abilities.intelligence = abilityChoices.shift();
      break;
    case 1: //bard
      console.log(`Bard-- charisma and dexterity`);
      this.abilities.strength = abilityChoices[5];
      this.abilities.dexterity = abilityChoices[1];
      this.abilities.constitution = abilityChoices[2];
      this.abilities.intelligence = abilityChoices[4];
      this.abilities.wisdom = abilityChoices[3];
      this.abilities.charisma = abilityChoices[0];
      break;
    case 2: //cleric
      console.log(`Cleric-- wisdom and strength`);
      this.abilities.strength = abilityChoices[1];
      this.abilities.dexterity = abilityChoices[3];
      this.abilities.constitution = abilityChoices[2];
      this.abilities.intelligence = abilityChoices[5];
      this.abilities.wisdom = abilityChoices[0];
      this.abilities.charisma = abilityChoices[4];
      break;
    case 3: //druid
      console.log(`Druid-- wisdom and constitution`);
      this.abilities.strength = abilityChoices[4];
      this.abilities.dexterity = abilityChoices[5];
      this.abilities.constitution = abilityChoices[1];
      this.abilities.intelligence = abilityChoices[2];
      this.abilities.wisdom = abilityChoices[0];
      this.abilities.charisma = abilityChoices[3];
      break;
    case 4: //fighter
      console.log(`Fighter-- strength and constitution`);
      this.abilities.strength = abilityChoices[0];
      this.abilities.dexterity = abilityChoices[2];
      this.abilities.constitution = abilityChoices[1];
      this.abilities.intelligence = abilityChoices[3];
      this.abilities.wisdom = abilityChoices[4];
      this.abilities.charisma = abilityChoices[5];
      break;
    case 5: //monk
      console.log(`Monk-- dexterity and wisdom`);
      this.abilities.strength = abilityChoices[3];
      this.abilities.dexterity = abilityChoices[0];
      this.abilities.constitution = abilityChoices[2];
      this.abilities.intelligence = abilityChoices[5];
      this.abilities.wisdom = abilityChoices[1];
      this.abilities.charisma = abilityChoices[4];
      break;
    case 6: //paladin
      console.log(`Paladin-- strength and charisma`);
      this.abilities.strength = abilityChoices[0];
      this.abilities.dexterity = abilityChoices[3];
      this.abilities.constitution = abilityChoices[2];
      this.abilities.intelligence = abilityChoices[5];
      this.abilities.wisdom = abilityChoices[4];
      this.abilities.charisma = abilityChoices[1];
      break;
    case 7: //ranger
      console.log(`Ranger-- dexterity and wisdom`);
      this.abilities.strength = abilityChoices[2];
      this.abilities.dexterity = abilityChoices[0];
      this.abilities.constitution = abilityChoices[3];
      this.abilities.intelligence = abilityChoices[5];
      this.abilities.wisdom = abilityChoices[1];
      this.abilities.charisma = abilityChoices[4];
      break;
    case 8: //rogue
      console.log(`Rogue-- dexterity and intelligence`);
      this.abilities.strength = abilityChoices[4];
      this.abilities.dexterity = abilityChoices[0];
      this.abilities.constitution = abilityChoices[3];
      this.abilities.intelligence = abilityChoices[1];
      this.abilities.wisdom = abilityChoices[5];
      this.abilities.charisma = abilityChoices[2];
      break;
    case 9: //sorcerer
      console.log(`Sorcerer-- charisma and constitution`);
      this.abilities.strength = abilityChoices[5];
      this.abilities.dexterity = abilityChoices[3];
      this.abilities.constitution = abilityChoices[1];
      this.abilities.intelligence = abilityChoices[2];
      this.abilities.wisdom = abilityChoices[4];
      this.abilities.charisma = abilityChoices[0];
      break;
    case 10: //warlock
      console.log(`Warlock-- charisma and constitution`);
      this.abilities.strength = abilityChoices[3];
      this.abilities.dexterity = abilityChoices[2];
      this.abilities.constitution = abilityChoices[1];
      this.abilities.intelligence = abilityChoices[4];
      this.abilities.wisdom = abilityChoices[5];
      this.abilities.charisma = abilityChoices[0];
      break;
    case 11: //wizard
      console.log(`Wizard-- intelligence and constitution`);
      this.abilities.strength = abilityChoices[5];
      this.abilities.dexterity = abilityChoices[2];
      this.abilities.constitution = abilityChoices[1];
      this.abilities.intelligence = abilityChoices[0];
      this.abilities.wisdom = abilityChoices[4];
      this.abilities.charisma = abilityChoices[3];
      break;
  }
  console.log(`Strength: ${this.getStrength()}`);
  console.log(`Dexterity: ${this.getDexterity()}`);
  console.log(`Constitution: ${this.getConstitution()}`);
  console.log(`Intelligence: ${this.getIntelligence()}`);
  console.log(`Wisdom: ${this.getWisdom()}`);
  console.log(`Charisma: ${this.getCharisma()}`);

  switch (this.race) {
    case 0: //dwarf
      console.log(`Dwarf-- const +2`);
      this.abilities.constitution += 2;
      break;
    case 1: //elf
    console.log(`Elf-- dex +2`);
      this.abilities.dexterity += 2;
      break;
    case 2: //halfling
    console.log(`Halfling-- dex +2`);
      this.abilities.dexterity += 2;
      break;
    case 3: //human
    console.log(`Human-- all +1`);
      this.abilities.strength += 1;
      this.abilities.dexterity += 1;
      this.abilities.constitution += 1;
      this.abilities.intelligence += 1;
      this.abilities.wisdom += 1;
      this.abilities.charisma += 1;
      break;
    case 4: //dragonborn
    console.log(`Dragonborn-- str +2, char +2`);
      this.abilities.strength += 2;
      this.abilities.charisma += 1;
      break;
    case 5: //gnome
    console.log(`Gnome-- int +2`);
      this.abilities.intelligence += 2;
      break;
    case 6: //half-elf
    console.log(`Half-elf-- char +2`);
      this.abilities.charisma += 2;
      break;
    case 7: //half-orc
    console.log(`Half-orc-- str +2, const +1`);
      this.abilities.strength += 2;
      this.abilities.constitution += 1;
      break;
    case 8: //tiefling
    console.log(`Tiefling-- int +1, char +2`);
      this.abilities.intelligence += 1;
      this.abilities.charisma += 2;
      break;
    }

    console.log(`Strength: ${this.getStrength()}`);
    console.log(`Dexterity: ${this.getDexterity()}`);
    console.log(`Constitution: ${this.getConstitution()}`);
    console.log(`Intelligence: ${this.getIntelligence()}`);
    console.log(`Wisdom: ${this.getWisdom()}`);
    console.log(`Charisma: ${this.getCharisma()}`);
  }
}

export default Character;