import React, { Component } from "react";
import ReactDOM from "react-dom";
import PokemonCard from "./PokemonCard";
import Loading from "../layout/Loading";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<PokemonList />, rootElement);
