import "expo-router/entry";

import { View } from "react-native";
import { useState } from "react";
import User from "../../../components/UserInfo";
import ProductList from "../../../components/ProductList";
import Families from "../../../components/Families";
import { CartProduct } from "../../../types/CartProduct";
import uuid from "react-native-uuid";
import { useCart } from "../../../context/CartContext";
import { useProducts } from "../../../context/ProducContext";

export default function App() {
  const { productsContext } = useProducts();
  const [familySelected, setFamilySelected] = useState("");

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const { addToCart } = useCart();

  const filterByFamily = (families: string) => {
    const selectedProducts = productsContext.filter(
      (p) => p.family === families
    );
    setFamilySelected(families);
    setFilteredProducts(selectedProducts);
  };

  const handleDelete = (id: string) => {
    setFilteredProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const deleteAll = () => {
    setFilteredProducts([]);
    setFamilySelected("");
  };

  const cartAdd = (itemName: string, totalPrice: number, counter: number) => {
    const newItem: CartProduct = {
      id: uuid.v4(),
      itemName,
      price: totalPrice,
      count: counter,
    };

    addToCart(newItem);
  };

  return (
    <View>
      <View>
        <User></User>

        <Families
          filterByFamily={filterByFamily}
          familySelected={familySelected}
        ></Families>
        <ProductList
          productList={filteredProducts}
          familySelected={familySelected}
          onDelete={handleDelete}
          saveCart={cartAdd}
          deleteAll={deleteAll}
        ></ProductList>
      </View>
    </View>
  );
}
