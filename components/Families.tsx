import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import ButtonCategory from "../components/ProductFamilyButton";
import themes from "../theme/colors"

type Props = {
  filterByFamily: (data: string) => void;
  familySelected : string
};

const Families = ({ filterByFamily, familySelected }: Props) => {
  const FAMILY_LIST = [
    "Tabaco de Liar",
    "Tabaco Industrial",
    "Tabaco Negro",
    "Tabaco de Pipa",
    "Puros",
    "Vapes",
  ];


  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {FAMILY_LIST.map((item, key) => (
          <ButtonCategory
            key={key}
            family={item}
            isSelected={familySelected === item}
            showList={() => filterByFamily(item)}
          ></ButtonCategory>
        ))}
      </ScrollView>
    </View>
  );
};

export default Families;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: themes.backgroundColor
  },
});
