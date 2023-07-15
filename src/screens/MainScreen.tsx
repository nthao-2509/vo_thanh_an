import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../modules/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width, height } = Dimensions.get("screen");

const MainScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Student App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("student-screen")}
      >
        <Text style={styles.buttonText}>View Students</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Colors.blueGradiant,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.white,
  },
});
