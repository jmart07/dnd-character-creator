import React, { Component } from "react";

class CreateCharacter extends Component {
  state = {
    name: "",
    race: "",
    charClass: ""
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    console.log("handling submit: ${event}");

    fetch("http://localhost:3000/characters", {
      body: JSON.stringify({
        name: this.state.name,
        race: this.state.race,
        charClass: this.state.charClass
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

    this.setState({ [id]: value})
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          <label>Race:</label>
          <select value={this.state.race} onChange={this.handleChange}>
            <option value="dwarf">Dwarf</option>
            <option value="elf">Elf</option>
            <option value="halfling">Halfling</option>
            <option value="human">Human</option>
            <option value="dragonborn">Dragonborn</option>
            <option value="gnome">Gnome</option>
            <option value="half-elf">Half-Elf</option>
            <option value="half-orc">Half-Orc</option>
            <option value="tiefling">Tiefling</option>
          </select>
          <label>Class:</label>
          <select value={this.state.charClass} onChange={this.handleChange}>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="leric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="rogue">Rogue</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>
          </select>
          <input type="submit" value="Create New Character" />
        </form>
      </>
    );
  }
}

export default CreateCharacter;
