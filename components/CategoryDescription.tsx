import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CATEGORIES } from "../data/categories";
import { useCart } from "../context/CartContext";

type Props = {
  familySelected: string;
  totalSelected: number;
};

const CategoryDescription = ({ familySelected, totalSelected }: Props) => {
  const category = CATEGORIES.find((cat) => cat.id === familySelected);
  const { getCounter } = useCart();

  return (
    <View style={styles.container}>
      {familySelected.length > 0 && category ? (
        <View style={styles.box}>
          <Image source={category.image} style={styles.imagen} />

          <View style={styles.counter}>
            <Text style={styles.texto}>{category.name}</Text>
            <Text style={styles.texto}>
              {getCounter()} total seleccionados
            </Text>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default CategoryDescription;

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  box: {
    flexDirection: "row",
  },
  description: {
    textAlign: "center",
  },
  counter: {
    marginLeft: 20,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  alignCounters: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 15,
  },
});
