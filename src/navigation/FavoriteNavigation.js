import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import FavoriteScreen from '../screens/Favorite';

const stack = createStackNavigator ();

export default function FavoriteNavigation() {
  return (
    <stack.Navigator>
        <stack.Screen name='Favoritos' component={FavoriteScreen}/>
    </stack.Navigator>
  )
}