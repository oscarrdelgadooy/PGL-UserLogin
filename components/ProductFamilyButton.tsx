import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../theme/colors";

type Props = {
  family: string;
  showList: Function;
  isSelected: boolean;
};


const ProductFamilyButton = ({ family, showList, isSelected }: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          isSelected ? styles.selected : styles.notSelected,
        ]}
        onPress={() => showList()}
        activeOpacity={1}
      >
        <Text style={styles.text}>{family}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductFamilyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.backgroundColor,
    marginTop: 6,
    marginLeft: 5,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    borderWidth: 1,

  },
  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  selected: {
    backgroundColor: "white",
  },

  notSelected: {
    backgroundColor: theme.backgroundColor,
  },
});
