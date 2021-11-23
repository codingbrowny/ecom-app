import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.formField}>
          <Text style={styles.title}>Login</Text>
          <View>
            <View>
              <TextInput style={styles.input} placeholder="Enter your email" />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
            <Text>Forgot password?</Text>
            <View>
              <TouchableHighlight style={styles.loginBtn}>
                <Text style={styles.loginText}>login</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.otherOption}>OR</Text>
            <View style={styles.icons_View}>
              <Text>Icons here</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F7F6FF",
  },
  loginWrapper: {
    height: 532,
    width: "90%",
    margin: "auto",
    borderRadius: 34,
    shadowColor: "#F7F6FF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  formField: {
    width: "90%",
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    padding: 15,
    color: "#FF0036",
  },
  input: {
    height: 44,
    margin: 12,
    borderColor: "#EAEAF5",
    borderBottomWidth: 2,
    // padding: 10,
  },
  loginBtn: {
    marginTop: 65,
    padding: 15,
    backgroundColor: "#FF0036",
    borderRadius: 30,
    elevation: 3,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  otherOption: {
    textAlign: "center",
    padding: 35,
  },
  icons_View: {
    alignItems: "center",
  },
});

export default Login;
