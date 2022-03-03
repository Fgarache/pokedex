import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import AccountScreen from '../screens/Account';

const stack = createStackNavigator ();

export default function AccountNavigation() {
  return (
    <stack.Navigator>
        <stack.Screen name='Mi Cuenta' component={AccountScreen}/>
    </stack.Navigator>
  )
}