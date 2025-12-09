import { Stack } from "expo-router";
import { CartProvider } from "../../../context/CartContext";
import { ProductsProvider } from "../../../context/ProducContext";

export default function Layout() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="cart" />
          <Stack.Screen name="form" />
        </Stack>
      </CartProvider>
    </ProductsProvider>
  );
}
