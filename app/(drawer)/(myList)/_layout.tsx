import { Stack } from "expo-router";
import { ProductsProvider } from "../../../context/ProducContext";
import { CartProvider } from "../../../context/CartContext";


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
