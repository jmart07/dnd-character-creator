import React, { Component } from "react";
import {Character} from "./character.js";

class CreateUpdateCharacter extends Component {
  state = {
    name: "",
    race: 0,
    charClass: 0,
  }

  handleCreate = (event) => {
    event.preventDefault();

    console.log("Creating new character");

    const newCharacter = new Character(0, this.state.name, this.state.race, this.state.charClass);
    newCharacter.updateAbilities();

    fetch("http://localhost:3000/characters", {
      body: JSON.stringify({
        name: newCharacter.getName(),
        race: newCharacter.getRaceIndex(),
        character_class: newCharacter.getCharClassIndex(),
        strength: newCharacter.getStrength(),
        dexterity: newCharacter.getDexterity(),
        constitution: newCharacter.getConstitution(),
        intelligence: newCharacter.getIntelligence(),
        wisdom: newCharacter.getWisdom(),
        charisma: newCharacter.getCharisma()
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(character => {
        return character.json();
      })
      .then(() => {
        return;
      });
  }

  handleUpdate = (event) => {
    event.preventDefault();
    console.log('Updating character');

    fetch(`http://localhost:3000/characters/${this.props.editId}`, {
      body: JSON.stringify({
        name: this.state.name,
      }),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(character => {
        return character.json();
      })
      .then(() => {
        this.setState({
          name: ""
        });
      });
  }

  handleChange = (event) => {
    const target = event.target;
    const id = target.id
    const value = target.value

    this.setState({ [id]: value});
  }

  render() {
    return(
      <div className='create'>
        <form onSubmit={ this.props.editMode ? this.handleUpdate.bind(this) : this.handleCreate.bind(this)}>
          { this.props.editMode &&
          <>
            <label>Name:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          </>
          }
          { !this.props.editMode &&
          <>
            <label>Race:</label>
            <select id="race" value={this.state.race} onChange={this.handleChange}>
              <option value="0">{ Character.getRaceByIndex(0) }</option>
              <option value="1">{ Character.getRaceByIndex(1) }</option>
              <option value="2">{ Character.getRaceByIndex(2) }</option>
              <option value="3">{ Character.getRaceByIndex(3) }</option>
              <option value="4">{ Character.getRaceByIndex(4) }</option>
              <option value="5">{ Character.getRaceByIndex(5) }</option>
              <option value="6">{ Character.getRaceByIndex(6) }</option>
              <option value="7">{ Character.getRaceByIndex(7) }</option>
              <option value="8">{ Character.getRaceByIndex(8) }</option>
            </select>
            <label>Class:</label>
            <select id="charClass" value={this.state.charClass} onChange={this.handleChange}>
              <option value="0">{ Character.getCharClassByIndex(0) }</option>
              <option value="1">{ Character.getCharClassByIndex(1) }</option>
              <option value="2">{ Character.getCharClassByIndex(2) }</option>
              <option value="3">{ Character.getCharClassByIndex(3) }</option>
              <option value="4">{ Character.getCharClassByIndex(4) }</option>
              <option value="5">{ Character.getCharClassByIndex(5) }</option>
              <option value="6">{ Character.getCharClassByIndex(6) }</option>
              <option value="7">{ Character.getCharClassByIndex(7) }</option>
              <option value="8">{ Character.getCharClassByIndex(8) }</option>
              <option value="9">{ Character.getCharClassByIndex(9) }</option>
              <option value="10">{ Character.getCharClassByIndex(10) }</option>
              <option value="11">{ Character.getCharClassByIndex(11) }</option>
            </select>
          </>
          }
          <input type="submit" value={ this.props.editMode ? "Save Name" : "Create New Character"} />
        </form>
      </div>
    );
  }
}

export default CreateUpdateCharacter;
