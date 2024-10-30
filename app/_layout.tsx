import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(main)"
        options={{ headerShown: false, title: "Tumbas Gadget" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: "Categories" }}
      />
      <Stack.Screen
        name="products"
        options={{ headerShown: true, title: "Products" }}
      />
      <Stack.Screen
        name="cart"
        options={{ presentation: "modal", title: "Shopping Cart" }}
      />
      <Stack.Screen name="auth" options={{ headerShown: true }} />
    </Stack>
  );
}
