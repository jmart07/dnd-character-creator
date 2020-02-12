# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p "Seeding database..."
p "Creating characters..."

Character.create([
  { name: "DwarfBarb", strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0 },
  { name: "ElfBard", strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
  { name: "HalflingCleric", strength: 2, dexterity: 2, constitution: 2, intelligence: 2, wisdom: 2, charisma: 2 }
])

p "Done seeding."

#
# p "Creating races..."
#
# Race.create([
#   { name: "Dwarf",      ability_buff: [0,0,2,0,0,0],    speed: 25, size: "Medium" },
#   { name: "Elf",        ability_buff: [0,2,0,0,0,0],    speed: 30, size: "Medium" },
#   { name: "Halfling",   ability_buff: [0,2,0,0,0,0],    speed: 25, size: "Small" },
#   { name: "Human",      ability_buff: [1,1,1,1,1,1],    speed: 30, size: "Medium" },
#   { name: "Dragonborn", ability_buff: [2,0,0,0,0,1],    speed: 30, size: "Medium" },
#   { name: "Gnome",      ability_buff: [0,0,0,2,0,0],    speed: 30, size: "Small" },
#   { name: "Half-Elf",   ability_buff: [0,0,0,0,0,2,-1], speed: 30, size: "Medium" },
#   { name: "Half-Orc",   ability_buff: [2,0,1,0,0,0],    speed: 30, size: "Medium" },
#   { name: "Tiefling",   ability_buff: [0,0,0,1,0,2],    speed: 30, size: "Medium" }
# ])
#
# p "Creating clases..."
#
# CharClass.create([
#   { name: "Barbarian",  modifier: 12, primary_abilities: [0,2] },
#   { name: "Bard",       modifier: 8,  primary_abilities: [5,1] },
#   { name: "Cleric",     modifier: 8,  primary_abilities: [4,0] },
#   { name: "Druid",      modifier: 8,  primary_abilities: [4,2] },
#   { name: "Fighter",    modifier: 10, primary_abilities: [0,2] },
#   { name: "Monk",       modifier: 8,  primary_abilities: [1,4] },
#   { name: "Paladin",    modifier: 10, primary_abilities: [0,5] },
#   { name: "Ranger",     modifier: 10, primary_abilities: [1,4] },
#   { name: "Rogue",      modifier: 8,  primary_abilities: [1,3] },
#   { name: "Sorcerer",   modifier: 6,  primary_abilities: [5,2] },
#   { name: "Warlock",    modifier: 8,  primary_abilities: [5,2] },
#   { name: "Wizard",     modifier: 6,  primary_abilities: [3,2] }
# ])
#
# p "Creating abilities..."
#
# Ability.create([
#   { name: "Strength"},
#   { name: "Dexterity"},
#   { name: "Constitution"},
#   { name: "Intelligence"},
#   { name: "Wisdom"},
#   { name: "Charisma"}
# ])
#
#
#
