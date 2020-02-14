import React, { Component } from "react";
import {getRaceName, getClassName} from "./characterHelper.js";

class CharacterShow extends Component {
  render() {
    return(
      <div className="character">
        <h3>{this.props.character.name}</h3>
        <li>Race: {getRaceName(this.props.character.race)}</li>
        <li>Class: {getClassName(this.props.character.character_class)}</li>
        <li>Strength: {this.props.character.strength}</li>
        <li>Dexterity: {this.props.character.dexterity}</li>
        <li>Constitution: {this.props.character.constitution}</li>
        <li>Intelligence: {this.props.character.intelligence}</li>
        <li>Wisdom: {this.props.character.wisdom}</li>
        <li>Charisma: {this.props.character.charisma}</li>
      </div>
    )
  }
}

export default CharacterShow;
