import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function OrdersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Orders" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
