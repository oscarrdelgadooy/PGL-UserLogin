import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Product } from "../../../types/Product";
import { useRouter } from "expo-router";
import { useProducts } from "../../../context/ProducContext";
import uuid from "react-native-uuid";

const FAMILY_LIST = [
  "Tabaco de Liar",
  "Tabaco Industrial",
  "Tabaco Negro",
  "Tabaco de Pipa",
  "Puros",
  "Vapes",
];

const Form = () => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState(FAMILY_LIST[0]);
  const [price, setPrice] = useState("");

  const router = useRouter();
  const { addProduct } = useProducts();

  const handleSubmit = () => {
    if (!name || !price) {
      alert("Completa todos los campos");
      return;
    }

    const newProduct: Product = {
      id: uuid.v4(),
      name,
      family,
      price: parseFloat(price),
    };
    
    addProduct(newProduct);
    setName("");
    setFamily(FAMILY_LIST[0]);
    setPrice("");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Producto:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingresa el nombre"
      />

      <Text style={styles.label}>Selecciona la Familia:</Text>
      <View style={styles.familyContainer}>
        {FAMILY_LIST.map((f) => (
          <TouchableOpacity
            key={f}
            style={[
              styles.familyButton,
              family === f && styles.familyButtonSelected,
            ]}
            onPress={() => setFamily(f)}
          >
            <Text
              style={
                family === f ? styles.familyTextSelected : styles.familyText
              }
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Ingresa el precio"
        keyboardType="numeric"
      />

      <Button title="Agregar Producto" onPress={handleSubmit} />
      <Button title="Salir" onPress={() => router.back()}></Button>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
  },
  familyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  familyButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  familyButtonSelected: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  familyText: {
    color: "#000",
  },
  familyTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
});
