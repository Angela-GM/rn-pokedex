import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../context/Context'; // Asegúrate de importar correctamente el contexto

import { PokemonCard } from '../components/PokemonCard';
// import useFetch from '../hooks/useFetch';


export default function HomeScreen() {
  // const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151'); // Llama a useFetch
  const { state, dispatch } = useContext(AppContext); // Obtén el estado de tu contexto global

  const { pokemons } = state; // Extrae la matriz de Pokémon del estado

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
  data={pokemons}
  keyExtractor={(item) => item.url} // Utiliza la URL como clave única
  // renderItem={({ item }) => <PokemonCard url={item.url} />}
  renderItem={({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )}
/>
    
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

function
  // renderItem={({ item }) => <PokemonCard url={item.url} />}
  renderItem(info: ListRenderItemInfo<Pokemon>): ReactElement<any, string | JSXElementConstructor<any>> | null {
    throw new Error('Function not implemented.');
}
