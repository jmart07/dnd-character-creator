// returns random value for single character ability using the same logic as specified in D&D Player's Handbook
// roll four six-sided dice, sum three highest rolls (possible numbers 3 - 18)
getAbility = () => {
  const abilities = [];
  for(let i = 0; i < 4; i++) {
    abilities.push(Math.floor(Math.random() * 6) + 1);
  }
  console.log(abilities);

  abilities.sort((a, b) => b - a);

  console.log(abilities);

  let ability = abilities[0] + abilities[1] + abilities[2];

  console.log(ability);

  return ability;
}

// returns array of six abilities in descending order to be used in random character generation as specified in D&D Player's Handbook
// abilities randomly generated by getAbility function, so possible return values is array with six numbers each from 3 - 18 inclusive
getAbilities = () => {
  const abilities = [];

  for(let i = 0; i < 6; i++) {
    abilities.push(getAbility());
  }

  console.log(abilities);
  abilities.sort((a, b) => b - a);
  console.log(abilities);
}

getAbilities();