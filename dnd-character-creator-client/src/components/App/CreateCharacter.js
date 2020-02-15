import React, { Component } from "react";
import {races, charClasses} from "./characterHelper.js";

class CreateCharacter extends Component {
  state = {
    name: "",
    race: 0,
    charClass: 0
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    console.log("handling submit: ${event}");

    fetch("http://localhost:3000/characters", {
      body: JSON.stringify({
        name: this.state.name,
        race: this.state.race,
        character_class: this.state.charClass
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdCharacter => {
        return createdCharacter.json();
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

    console.log(`${id}, ${value}`);

    this.setState({ [id]: value});
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          <label>Race:</label>
          <select id="race" value={this.state.race} onChange={this.handleChange}>
            <option value="0">{ races[0] }</option>
            <option value="1">{ races[1] }</option>
            <option value="2">{ races[2] }</option>
            <option value="3">{ races[3] }</option>
            <option value="4">{ races[4] }</option>
            <option value="5">{ races[5] }</option>
            <option value="6">{ races[6] }</option>
            <option value="7">{ races[7] }</option>
            <option value="8">{ races[8] }</option>
          </select>
          <label>Class:</label>
          <select id="charClass" value={this.state.charClass} onChange={this.handleChange}>
            <option value="0">{ charClasses[0] }</option>
            <option value="1">{ charClasses[1] }</option>
            <option value="2">{ charClasses[2] }</option>
            <option value="3">{ charClasses[3] }</option>
            <option value="4">{ charClasses[4] }</option>
            <option value="5">{ charClasses[5] }</option>
            <option value="6">{ charClasses[6] }</option>
            <option value="7">{ charClasses[7] }</option>
            <option value="8">{ charClasses[8] }</option>
            <option value="9">{ charClasses[9] }</option>
            <option value="10">{ charClasses[10] }</option>
            <option value="11">{ charClasses[11] }</option>
          </select>
          <input type="submit" value="Create New Character" />
        </form>
      </>
    );
  }
}

export default CreateCharacter;
