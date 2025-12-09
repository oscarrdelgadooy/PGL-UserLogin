import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import theme from "../theme/colors";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const User = () => {
  const router = useRouter();

  return (
    <View style={styles.sizableBox}>
      <Image
        source={require("../assets/UserPic.png")}
        style={styles.picStyles}
      ></Image>
      <Text style={styles.colorFont}>xXOscar_Pro_GammerXx</Text>

      <TouchableOpacity onPress={() => router.push("/cart")} style={styles.cartCenter}>
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  sizableBox: {
    backgroundColor: theme.backgroundColor,
    height: 105,
    flexDirection: "row",
    alignItems: "center",
  },
  colorFont: {
    color: theme.font,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 10,
  },
  picStyles: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 20,
  },
  cartCenter:{
    position: "absolute",
    right: 20,
    top: "50%",
  }
});
