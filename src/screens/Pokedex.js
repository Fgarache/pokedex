import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

//obtener datos de la api
export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log("pokemons--->", pokemons);

  useEffect(() => {
      (async ()=> {
        await loadPokemon ();    
      })()
  }, []);

  const loadPokemon = async() => {
    try {
      const response = await getPokemonsApi();

      const pokemosArray = [];

      for await (const pokemon of response.results) {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      console.log (pokemonDetails)

          pokemosArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            imagen:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          })
      }

      setPokemons ([...pokemons, ...pokemosArray]);
    } catch (error) {
    
    }
  }
  

  return (
    <SafeAreaView>
      <PokemonList pokemons = {pokemons}/>
      
    </SafeAreaView>
  );
}