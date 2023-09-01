import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import useFetch from '../hooks/useFetch';


const PokemonDetailScreen = () => {
  const route = useRoute();
  const { url } = route.params;

  const Stack = createStackNavigator();

  console.log(url);
  const { data, loading, error } = useFetch(url);
  console.log(data);
  
  


  return (
    <SafeAreaView>
      <Text>Add Pokemon </Text>
    </SafeAreaView>
  );
};



export default PokemonDetailScreen;