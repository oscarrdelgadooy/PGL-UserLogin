import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/Product";
import CategoryDescription from "../components/CategoryDescription";
import PriceFinal from "../components/PriceFinal";

type Props = {
  productList: Product[];
  familySelected: string;
  onDelete: (id: string) => void;
  saveCart: (name: string, totalPrice: number, counter: number) => void;
  deleteAll: () => void
};

const ProductList = ({
  productList,
  familySelected,
  onDelete,
  saveCart,
  deleteAll
}: Props) => {
  const [totalSelected, setTotalSelected] = useState(0);
  const [price, setPrice] = useState(0);
  
  const sumAllSelected = (counter: number, total: number, name: string) => {
    setTotalSelected(totalSelected + counter);
    setPrice(price + total);
    saveCart(name, price, counter);
  };

  const buyAll = () => {
    setPrice(0);
    setTotalSelected(0);
  };
  

  return (
    <View>
      <CategoryDescription
        familySelected={familySelected}
        totalSelected={totalSelected}
      ></CategoryDescription>
      <ScrollView style={styles.scrollview}>
        {productList.length > 0 &&
          productList.map((product) => (
            <ProductCard
              item={product}
              key={product.id}
              sendCounter={sumAllSelected}
              onDelete={onDelete}
            ></ProductCard>
          ))}
      </ScrollView>

      {productList.length > 0 && (
        <PriceFinal onPress={buyAll} deleteAll={deleteAll}></PriceFinal>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 30,
  },
  scrollview: {
    height: "68%",
  },
});
