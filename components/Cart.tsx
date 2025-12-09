import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Product } from "../types/Product";

type Props = {
  visible: boolean;
  onClose: () => void;
  cart: Product[];
};

const Cart = ({ visible, onClose, cart }: Props) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Carrito</Text>
          <ScrollView>
            {cart.map((item, key) => (
                <Text>item</Text>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Cart;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
  closeBtn: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
