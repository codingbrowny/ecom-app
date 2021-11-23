import React from "react";
import { View, FlatList, Text, StyleSheet, StatusBar } from "react-native";

const CATEGORIES = [
  {
    id: "cat_1",
    title: "T-Shirt",
  },
  {
    id: "cat_2",
    title: "Trousers",
  },
  {
    id: "cat_3",
    title: "Hoodies",
  },
  {
    id: "cat_4",
    title: "Short Sleeves",
  },
  {
    id: "cat_5",
    title: "Long Sleeves",
  },
  {
    id: "cat_6",
    title: "Shoes",
  },
  {
    id: "cat_7",
    title: "Underwear",
  },
];

const Render = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const SlidingCategory = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.categoryHeader}>Categories</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={Render}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  categoryHeader: {
    fontSize: 18,
    paddingBottom: 10,
    color: "gray",
  },
  item: {
    backgroundColor: "#fff",
    padding: 25,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    shadowColor: "#F7F6FF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default SlidingCategory;
