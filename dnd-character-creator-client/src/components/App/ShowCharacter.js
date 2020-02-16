import React, { Component } from "react";
// import {Character} from "./character.js";

class ShowCharacter extends Component {
  deleteCharacter = (id) => {
    console.log(`Deleting character with id ${id}`);
    fetch(`http://localhost:3000/characters/${id}`, {
      method: "DELETE"
    }).then((deleted) => {
      console.log(deleted);
    })

  }

  render() {
    return(
      <div className="character">
        <h3>{this.props.character.getName()}</h3>
        <li>Race: {this.props.character.getRaceName()}</li>
        <li>Class: {this.props.character.getCharClassName()}</li>
        <li>Strength: {this.props.character.getStrength()}</li>
        <li>Dexterity: {this.props.character.getDexterity()}</li>
        <li>Constitution: {this.props.character.getConstitution()}</li>
        <li>Intelligence: {this.props.character.getIntelligence()}</li>
        <li>Wisdom: {this.props.character.getWisdom()}</li>
        <li>Charisma: {this.props.character.getCharisma()}</li>
        <li className="delete" onClick={() => this.deleteCharacter(this.props.character.id)}>DELETE</li>
      </div>
    )
  }
}

export default ShowCharacter;
