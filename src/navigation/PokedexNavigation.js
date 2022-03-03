import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const stack = createStackNavigator ();

export default function FavoriteNavigation() {
  return (
    <stack.Navigator>
        <stack.Screen name='Pokemon' component={Pokedex}/>
        <stack.Screen name='Pokemons' component={Pokemon}/>
    </stack.Navigator>
  )
}