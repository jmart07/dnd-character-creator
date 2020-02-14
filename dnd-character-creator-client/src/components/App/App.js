import React, { Component } from 'react';
import CharacterShow from './CharacterShow.js';
import CreateCharacter from './CreateCharacter.js';


class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(json => this.prepareData(json))
      .then(data => this.createCharacters(data));
  }

  prepareData = (data) => {
    console.log(data)

    const charData = [];
    data.forEach((character) => {
      charData.push(character)
    });

    return charData;
  }

  createCharacters = (data) => {
    const allCharacters = [];
    data.map((character, i) => {
      allCharacters.push(character);
    });

    // if(allCharacters.length < 12) {
    //   for(let i = allCharacters.length; i < 12; i++) {
    //     allCharacters.push(this.randomCharacter());
    //   }
    // }

    this.setState({characters: allCharacters});
  }

  randomCharacter = () => {
    const newCharacter = {
      name: "random",
      race: Math.floor(Math.random() * 10),
      class: Math.floor(Math.random() * 11),
    };


    return newCharacter;
  }

  getAbilities = () => {
    const abilityChoices = [];

    for(let i = 0; i < 6; i++) {
      let ability = 0;
      for(let i = 0; i < 4; i++) {
        ability += Math.floor(Math.random * 6) + 1;
      }
      abilityChoices.push(ability);
    }

    console.log(abilityChoices);

    // strength: 1,
    // dexterity: 1,
    // constitution: 1,
    // intelligence: 1,
    // wisdom: 1,
    // charisma: 1

  }

  render() {
    return(
      <div className="app">
        <CreateCharacter />
        <div className="characters">
          {this.state.characters.map((character, i) => {
            return <CharacterShow key={i} character={character}/>
          })}
        </div>
      </div>
    )
  }
}

export default App;



// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
//
// import CharacterList from '../CharacterList/CharacterList.js'
//
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Link to='/characters'>Home</Link>
//
//         <Switch>
//           <Route path='/characters'>
//             <CharacterList />
//           </Route>
//         </Switch>
//       </Router>
//     );
//   }
// }
//
// export default App;
