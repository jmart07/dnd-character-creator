
const getRaceName = (index) => {
  switch (index) {
    case 0: return "Dwarf";
    case 1: return "Elf";
    case 2: return "Halfling";
    case 3: return "Human";
    case 4: return "Dragonborn";
    case 5: return "Gnome";
    case 6: return "Half-Elf";
    case 7: return "Half-Orc";
    case 8: return "Tiefling";
  }
}

const getClassName = (index) => {
  switch (index) {
    case 0: return "Barbarian"
    case 1: return "Bard"
    case 2: return "Cleric"
    case 3: return "Druid"
    case 4: return "Fighter"
    case 5: return "Monk"
    case 6: return "Paladin"
    case 7: return "Ranger"
    case 8: return "Rogue"
    case 9: return "Sorcerer"
    case 10: return "Warlock"
    case 11: return "Wizard"
  }
}

export { getRaceName, getClassName };





// # Race.create([
// #   { name: "Dwarf",      ability_buff: [0,0,2,0,0,0],    speed: 25, size: "Medium" },
// #   { name: "Elf",        ability_buff: [0,2,0,0,0,0],    speed: 30, size: "Medium" },
// #   { name: "Halfling",   ability_buff: [0,2,0,0,0,0],    speed: 25, size: "Small" },
// #   { name: "Human",      ability_buff: [1,1,1,1,1,1],    speed: 30, size: "Medium" },
// #   { name: "Dragonborn", ability_buff: [2,0,0,0,0,1],    speed: 30, size: "Medium" },
// #   { name: "Gnome",      ability_buff: [0,0,0,2,0,0],    speed: 30, size: "Small" },
// #   { name: "Half-Elf",   ability_buff: [0,0,0,0,0,2,-1], speed: 30, size: "Medium" },
// #   { name: "Half-Orc",   ability_buff: [2,0,1,0,0,0],    speed: 30, size: "Medium" },
// #   { name: "Tiefling",   ability_buff: [0,0,0,1,0,2],    speed: 30, size: "Medium" }
// # ])
// #
// # p "Creating clases..."
// #
// # CharClass.create([
// #   { name: "Barbarian",  modifier: 12, primary_abilities: [0,2] },
// #   { name: "Bard",       modifier: 8,  primary_abilities: [5,1] },
// #   { name: "Cleric",     modifier: 8,  primary_abilities: [4,0] },
// #   { name: "Druid",      modifier: 8,  primary_abilities: [4,2] },
// #   { name: "Fighter",    modifier: 10, primary_abilities: [0,2] },
// #   { name: "Monk",       modifier: 8,  primary_abilities: [1,4] },
// #   { name: "Paladin",    modifier: 10, primary_abilities: [0,5] },
// #   { name: "Ranger",     modifier: 10, primary_abilities: [1,4] },
// #   { name: "Rogue",      modifier: 8,  primary_abilities: [1,3] },
// #   { name: "Sorcerer",   modifier: 6,  primary_abilities: [5,2] },
// #   { name: "Warlock",    modifier: 8,  primary_abilities: [5,2] },
// #   { name: "Wizard",     modifier: 6,  primary_abilities: [3,2] }
