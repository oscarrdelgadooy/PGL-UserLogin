import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useCart as CartContext } from "../../../context/CartContext";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import themes from "../../../theme/colors";

export default function Cart() {
  const { cart, clearCart, removeFromCart, getTotal } = CartContext();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
        <FontAwesome
          name="arrow-left"
          size={22}
          color={themes.backgroundColor}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Carrito de la compra</Text>

      {cart.length > 0 ? (
        <ScrollView style={styles.list}>
          {cart.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View >
                <Text>{item.itemName}</Text>
                <Text style={styles.itemDetails}>
                  Cantidad: {item.count} | Precio: {item.price}€
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                <FontAwesome name="trash" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.empty}>El carrito está vacío.</Text>
      )}

      <View style={styles.footer}>
        <Text style={styles.total}>Total: {getTotal().toFixed(2)}€</Text>

        {cart.length > 0 && (
          <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Vaciar carrito</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#fff",
    marginTop: 15,
    zIndex: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  itemCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: themes.backgroundColor,
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  itemDetails: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
  },
  removeButton: {
    backgroundColor: "#E74C3C",
    padding: 10,
    borderRadius: 8,
  },
  empty: {
    textAlign: "center",
    fontSize: 18,
    color: themes.font,
    marginTop: 80,
  },
  footer: {
    borderTopColor: "white",
    paddingTop: 15,
    paddingBottom: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#111",
  },
  clearButton: {
    backgroundColor: themes.backgroundColor,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  clearButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
