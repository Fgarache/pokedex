import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import PokedexScreen from "../screens/Pokedex";
import AccountNavigation from "./AccontNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation"

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (

    //icono de favorito
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteNavigation} 
      options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({size}) => (
          <Icon name="heart" color = "red" size={size}/>
        ), 
      }}
      />

    
      <Tab.Screen name="Pokedex" component={PokedexNavigation} 
      options={{
        tabBarLabel: " ",
        tabBarIcon: ()=> renderPokeball()
      }}
      />


      <Tab.Screen name="Account" component={AccountNavigation} 
      options={{
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ size }) => (
          <Icon name="user" color="blue" size={size} />
        ),
      }}
      />

    </Tab.Navigator>
  );


  function renderPokeball() {
    return (
      <Image
        source={require("../assets/pokeball.png")}
        style={{ width: 110, height: 110, top: -23 }}

      />
    );
  }
}