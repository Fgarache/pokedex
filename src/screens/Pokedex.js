import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon";


//obtener datos de la api
export default function Pokedex() {
  useEffect(() => {
      (async ()=> {
        await loadPokemon ();
      })()
  }, []);

  const loadPokemon = async() => {
    try {
      const response = await getPokemonsApi();
      console.log (response);
    } catch (error) {
      console.log (error);
    }
  }
  

  return (
    <SafeAreaView>
      <Text>Pokedex Screens</Text>
      
    </SafeAreaView>
  );
}