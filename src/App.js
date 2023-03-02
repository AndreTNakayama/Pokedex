import React from "react";
// import Pokemon from "./components/pokemon/pokemon";
import pokedex from "./pokedex.png";
import Imagem from "./components/pokemon/imagem";
import Texto from "./components/pokemon/texto";

let poke_num = 1;

function App(){
  const [pokemon, setPokemon] = React.useState({});
  
  function Proximo(){
    poke_num++;
    Carregar();
  }

  function Anterior(){
    if(poke_num > 1){
      poke_num--;
    }
    Carregar();
  }

  function Carregar(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + poke_num)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  return (
    pokemon.sprites ?
    <main>
      <Imagem imagem={pokemon.sprites.front_default} altPokemon={"Pokemon"}></Imagem>
      <Texto nome={pokemon.id + ". " + pokemon.name} altPokemon={"Pokédex"}></Texto>
      <Imagem pokedex={pokedex}></Imagem>
      {/* <Texto tipo = {"Tipo(s): " + pokemon.types.map(type => type.type.name).join(" | ")} habilidade = {"Habilidade(s): " + pokemon.abilities.map(ability => ability.ability.name).join(" | ")} peso = {"Peso: " + pokemon.weight + " kg"} altura = {"Altura: " + pokemon.height + " pounds"}></Texto> */}
      {/* <Imagem shiny = {pokemon.sprites.front_shiny}></Imagem> */}
      <button class="btn btn-dark mt-2 mx-2" onClick={Anterior}>Anterior</button>
      <button class="btn btn-dark mt-2 mx-2" onClick={Proximo}>Proximo</button>
    </main>
    // <div className="main">
    //   <img src={pokedex}></img>
    //   <Pokemon imagem={pokemon.sprites.front_default}></Pokemon>
    //   <div className="container mt-5">
    //     <div>
    //       <Pokemon imagem={pokemon.sprites.front_default} nome={pokemon.id + ". " + pokemon.name} tipo = {"Tipo(s): " + pokemon.types.map(type => type.type.name).join(" | ")} habilidade = {"Habilidade(s): " + pokemon.abilities.map(ability => ability.ability.name).join(" | ")} peso = {"Peso: " + pokemon.weight + " kg"} altura = {"Altura: " + pokemon.height + " pounds"} shiny = {pokemon.sprites.front_shiny}></Pokemon>
    //     </div>
    //     <div className="d-flex justify-content-center">
    //       <button class="btn btn-dark mx-2" onClick={Anterior}>Anterior</button>
    //       <button class="btn btn-dark mx-2" onClick={Proximo}>Proximo</button>
    //     </div>
    //   </div>
    // </div>
    
    :

    <div className="container mt-5 card border-dark">
      <div className="row card-header">
        <h1 className="d-flex justify-content-center text-warning">Pokédex</h1>
      </div>
      <div>
        <h3 className="mt-3 text-center card-title justify-content-center">Todos os dados de pokémon de que você precisa em um só lugar, facilmente acessível.</h3>
        <div className="d-flex justify-content-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander"></img>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Bulbasaur"></img>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Squirtle"></img>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu"></img>
        </div>
        <h4 className="mt-3 card-title d-flex justify-content-center">What is Lorem Ipsum?</h4>
        <p className="card-title d-flex justify-content-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn w-50 btn-dark mt-3 mb-4" onClick={Carregar}>Carregar Pokédex</button>
      </div>
    </div>
  );
}

export default App;