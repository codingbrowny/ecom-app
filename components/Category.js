import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CATEGORIES = [
  { src: "../assets/images/cart.jpg", title: "Phones" },
  { src: "../assets/images/cart.jpg", title: "Cloths" },
  { src: "../assets/images/cart.jpg", title: "Shoes" },
  { src: "../assets/images/cart.jpg", title: "Furnitures" },
  { src: "../assets/images/cart.jpg", title: "Gadgets" },
];

const Renderer = () => {
  return CATEGORIES.map((category) => (
    <View key={category.title} style={styles.innerWarpper}>
      <Image
        style={styles.image}
        source={require("../assets/images/cart.jpg")}
      />
      <Text>{category.title}</Text>
    </View>
  ));
};

const Category = () => {
  return (
    <View style={styles.container}>
      <Renderer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  innerWarpper: {
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    resizeMode: "cover",
    backgroundColor: "lightskyblue",
  },
  title: {
    textAlign: "center",
  },
});

export default Category;
