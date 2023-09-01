import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../context/Context';
import { PokemonCard } from '../components/PokemonCard';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
  const { state } = useContext(AppContext); // Obtén el estado de tu contexto global
  const navigation = useNavigation(); // Obtén la prop de navegación


  // const { pokemons } = state; // Extrae el arry de Pokémon del estado
  // console.log(state.pokemons);
  // console.log(pokemons[1].url);
  


  return (
    <SafeAreaView >
    {state.pokemons.length === 0 ? (
      <Text>Cargando...</Text>
    ) : (

      // state.pokemons[0].map((item)=> item.name)
      <FlatList
        data={state.pokemons[0]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity
          onPress={() => {
            navigation.navigate('PokemonDetail', {url: item.url });

          }}
          >
          <PokemonCard url={item && 'url' in item ? item.url : ''} />
          </TouchableOpacity>
          
        )}
      />
    )}
  </SafeAreaView>
  );
}




