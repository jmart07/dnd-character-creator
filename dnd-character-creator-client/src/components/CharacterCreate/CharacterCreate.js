import React, { Component } from 'react';
// import CharacterShow from '../CharacterShow/CharacterShow.js';

class CharacterCreate extends Component {
  componentDidMount() {
    this.getCharacters();
  }

  handleRandom = (event) => {
    event.preventDefault();

    const str =
    const dex =
    const const =
    const int =
    const wis =
    const char =

    fetch('http://localhost:3000/characters', {
      body: JSON.stringify({ }),
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => this.prepareData(json))
      .then(data => this.createCharacters(data));
  }

  getAbility = () => {
    const rolls = [];
    for(let i = 0; i < 6; i++) {

    }


  }
