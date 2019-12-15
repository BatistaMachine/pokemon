import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemonIndex: "",
      imageUrl: "",
      types: [],
      description: "",
      stats: {
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        specialAttack: "",
        specialDefense: ""
      },
      height: "",
      weight: "",
      eggGroup: "",
      abilities: "",
      genderRatioMale: "",
      genderRatioFemale: "",
      evs: "",
      harchSteps: ""
    };
  }
  async componentDidMount() {
    const pokemonIndex = this.props.pokemonIndex;
    this.setState({ pokemonIndex });
    //Urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    console.log(pokemonUrl);
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    //Get Pokemon Information
    const pokemonRes = await axios.get(pokemonUrl);
    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;
    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
        default:
          break;
      }
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
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
ReactDOM.render(<Pokemon pokemonIndex={3} />, document.getElementById("root"));
