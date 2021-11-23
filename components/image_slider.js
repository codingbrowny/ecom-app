import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    height: 160,
    shadowColor: "#CDCCF1",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: "#fff",
  },
});

export default ImageSlider;