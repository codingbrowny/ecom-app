import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const ItemSearchBar = () => {
    return (
      <View style={styles.container}>
        <TextInput style={styles.seachBar} placeholder="Search for an item" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  seachBar: {
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "lightgray",
    shadowColor: "#F7F6FF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#fff",
  },
});

export default ItemSearchBar