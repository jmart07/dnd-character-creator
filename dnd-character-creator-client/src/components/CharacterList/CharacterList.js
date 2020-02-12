import React, { Component } from 'react';
import CharacterShow from '../CharacterShow/CharacterShow.js';

class CharacterList extends Component {
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
    this.setState({characters: allCharacters});
  }

  render() {
    return(
      <div className="characters">
        {this.state.characters.map((character, i) => {
          return <CharacterShow key={i} character={character}/>
        })}
      </div>
    )
  }
}

export default CharacterList;
