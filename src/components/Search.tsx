import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface SearchProps {
    setSearchValue: (text: string) => void;
  }

  const Search: React.FC<SearchProps> = (props) => {
    const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchValue(text);
  };



  return (
    <TextInput
      placeholder="Buscar Pokémon..."
      onChangeText={(text) => props.setSearchValue(text)}
    />
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 12,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: "grey",
  },
  searchIcon: {
    padding: 10,
  },
});
 export default Search;