import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Pokemon extends React.Component {
  state = { name: "", pokemonIndex: "", imageUrl: "" };
  async componentDidMount() {
    //Urls for pokemon information
    const { pokemonIndex } = this.props;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    //Get Pokemon Information
    const pokemonRes = await axios.get(pokemonUrl);
    const name = pokemonRes.data.name;
    this.setState({ name });
  }
  render() {
    return (
      <div>
        <h1>{this.state.pokemonIndex}</h1>
        <h1>Alex</h1>
        <h1>Alex</h1>
        <h1>Alex</h1>
        <h1>Alex</h1>
        <h1>Alex</h1>
        <h1>Alex</h1>
        <h1>Alex</h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Pokemon />, rootElement);
