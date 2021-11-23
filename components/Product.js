import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import productPic from "../assets/images/headphone-4.png";

const PRODUCTS = [
  { id: 1, product_img: require("../assets/images/headphone-1.png"), product_name: "Beat Stereo Headphone plus", Price: "$56.00" },
  { id: 2, product_img: require("../assets/images/headphone-2.png"), product_name: "Beat Spider wireless headset", Price: "$59.00" },
  { id: 3, product_img: require("../assets/images/headphone-3.png"), product_name: "Beat Alpha wireless headset", Price: "$55.90" },
  { id: 4, product_img: require("../assets/images/headphone-4.png"), product_name: "Beat Spider wireless headset", Price: "$60.00" },
  { id: 5, product_img: require("../assets/images/headphone-5.png"), product_name: "Beat Stereo Headphone plus", Price: "$57.25" },
  { id: 6, product_img: require("../assets/images/headphone-1.png"), product_name: "Beat Spider wireless headset", Price: "$60.00" },
];


const ProductRender = () => {
  return PRODUCTS.map((items) => (
    <View key={items.id} style={styles.card}>
      <Pressable style={styles.cardInnerWrapper}>
        <View style={styles.productcontent}>
          <View style={styles.prouct_image_wrapper}>
            <Image source={items.product_img} style={styles.product_image} />
          </View>
          <View>
            <Text>{items.product_name}</Text>
          </View>
          <View style={styles.priceAndAddToCartWrapper}>
            <Text style={styles.price}>{items.Price}</Text>
            <Button title="Add" />
          </View>
        </View>
      </Pressable>
    </View>
  ));
};

const Product = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.productHeader}>Best Price</Text>
      <View style={styles.innerWrapper}>
        <ProductRender />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productHeader: {
    fontSize: 18,
    paddingVertical: 10,
    color: "gray",
  },
  card: {
    height: 250,
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardInnerWrapper: {
    flex: 1,
    width: "95%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productcontent: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  product_image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  price: {
    fontSize: 20,
    color: "red",
  },
  priceAndAddToCartWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
});

export default Product;
