import React, { Component } from "react";
// import {Character} from "./character.js";

class ShowCharacter extends Component {
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
      </div>
    )
  }
}

export default ShowCharacter;
