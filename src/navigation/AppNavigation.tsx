import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailScreen from '../screens/HomeScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';

// Importa las pantallas que usarás en el Stack Navigator


// Crea un Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
      <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
    </Stack.Navigator>
  );
};





export default AppNavigator;
