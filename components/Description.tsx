import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Description = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={require("../assets/SofyanAmrabat.jpg")}
      ></Image>
      <View style={styles.infoLabel}>
        <Text style={styles.textInfo}>Descripción sobre mí!</Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  textInfo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  infoLabel: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
});
