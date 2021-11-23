import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {View, StyleSheet, Image} from 'react-native'
import Onboarding from "react-native-onboarding-swiper";




const Onboard = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Onboarding
          style={{ flex: 1 }}
          onSkip={() => navigation.navigate("Home")}
          onDone={() => navigation.navigate("Home")}
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../assets/images/cart.jpg")}
                  style={styles.image}
                />
              ),
              title: "Welcome",
              subtitle: "Buy all your quality products right from our shop",
            },
            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../assets/images/payment-1.jpg")}
                  style={styles.image}
                />
              ),
              title: "Payment",
              subtitle: "Pay securely and easily for all your items.",
            },
            {
              backgroundColor: "#fff",
              image: (
                <Image
                  source={require("../assets/images/delivery.jpg")}
                  style={styles.image}
                />
              ),
              title: "Delivery",
              subtitle: "Get your items delivered to you",
            },
          ]}
        />
        <StatusBar style={"auto"} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    image: {
        width: "90%",
        height: "60%",
        resizeMode: "contain",
        padding: "50%",
        marginBottom: "-20%"
    },
})


export default Onboard