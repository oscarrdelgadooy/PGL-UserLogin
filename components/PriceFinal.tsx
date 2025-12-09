import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";
import themes from "../theme/colors";
import { useCart } from "../context/CartContext";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  deleteAll: () => void
};

const PriceFinal = ({ onPress, deleteAll }: Props) => {
  const { getTotal } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.new} onPress={() => router.push("/form")}>
        <Text style={styles.text}>NEW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.new} onPress={deleteAll}>
        <Text style={styles.text}>
          {" "}
          <FontAwesome5 name="trash" size={24} color="black" />
           ALL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buy} onPress={onPress}>
        <Text style={styles.text}>BUY: {getTotal().toFixed(2)}€</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceFinal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },

  text: { color: "black", fontWeight: "bold", fontSize: 20 },

  new: {
    backgroundColor: themes.backgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buy: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
});
