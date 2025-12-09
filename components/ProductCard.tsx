import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import themes from "../theme/colors";
import { Product } from "../types/Product";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useCart } from "../context/CartContext";

type Props = {
  item: Product;
  sendCounter: (counter: number, total: number, item: string) => void;
  onDelete: (id: string) => void;
};

const ProductCard = ({ item, sendCounter, onDelete }: Props) => {
  const [counter, setCounter] = useState(0);

  const { sumOne, substractOne } = useCart();

  const funcSumOne = () => {
    sumOne(item.id);
    setCounter(counter + 1);
  };

  const funcSubstractOne = () => {
    substractOne(item.id);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetCounter = () => {
    if (counter > 0) {
      sendCounter(counter, item.price * counter, item.name);
      setCounter(0);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}
          >
            <FontAwesome5 name="trash" color="red"></FontAwesome5>
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>{item.price} €</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={funcSubstractOne} style={styles.iconButton}>
          <FontAwesome5 name="minus" size={18} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.counterText}>{counter}</Text>

        <TouchableOpacity onPress={funcSumOne} style={styles.iconButton}>
          <FontAwesome5 name="plus" size={18} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={resetCounter}
          style={styles.sendButton}
          disabled={counter === 0}
        >
          <Text style={styles.sendText}>Añadir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: themes.createButton,
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  sendButton: {
    backgroundColor: themes.returnButton,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  sendText: {
    color: "#fff",
    fontWeight: "600",
  },
  deleteButton: {
    padding: 6,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
