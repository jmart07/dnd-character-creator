import React, { Component } from 'react';
import {Character} from './character.js';
import ShowCharacter from './ShowCharacter.js';
import CreateUpdateCharacter from './CreateUpdateCharacter.js';

class App extends Component {
  state = {
    characters: [],
    editMode: false
  }

  componentDidMount() {
    this.getCharacters();
  }

  //called on-mount, fetch from rails api postgresql database
  getCharacters = () => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(json => this.prepareData(json))
      .then(data => this.renderCharacters(data));
  }
  //massages data from api to create new Character instance for each character, referenced in returned array
  prepareData = (data) => {
    console.log(data)

    const savedCharacters = [];
    data.forEach((character) => {
      const savedChar = new Character(
        character.name,
        character.race,
        character.character_class,
        {
          strength: character.strength,
          dexterity: character.dexterity,
          constitution: character.constitution,
          intelligence: character.intelligence,
          wisdom: character.wisdom,
          charisma: character.charisma
        });
        savedCharacters.push(savedChar);
    });

    return savedCharacters;
  }

  //takes array of references to Character instances and sets to state
  renderCharacters = (data) => {
    this.setState({characters: data});
  }

  render() {
    return(
      <div className="app">
        <CreateUpdateCharacter />
        <div className="characters">
          {this.state.characters.map((character, i) => {
            return <ShowCharacter key={i} character={character} />
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
