import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ItemSearchBar from "../components/item-search-bar";
import SlidingCategory from "../components/category-slider";
// import ImageSlider from "../components/Image_slider";
// import Category from "../components/Category";
import Product from "../components/Product";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerwrapper}>
        <ItemSearchBar />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}
        >
          <SlidingCategory />
          <Product />
          <Text style={styles.pageEndText}>End</Text>
        </ScrollView>
      </View>
      <StatusBar style={"auto"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f6ff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  innerwrapper: {
    width: "95%",
  },
  scrollview: {
    marginBottom: 60,
  },
  pageEndText: {
    color: "gray",
    textAlign: "center",
    marginVertical: 15,
  }
 
});

export default Home;
