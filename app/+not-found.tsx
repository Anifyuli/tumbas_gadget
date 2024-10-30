import { Link, Stack } from "expo-router";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Screen doesn't exist" }} />
      <View style={styles.container}>
        <Link asChild href="/" style={styles.button}>
          <Pressable>
            <Text style={{ color: "white", fontSize: 16 }}>Go to home screen</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8db0e8",
    borderRadius: 15,
    height: "auto",
    width: "auto",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
