import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

interface TabBarIconsProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

function TabBarIcons(props: TabBarIconsProps) {
  return (
    <FontAwesome
      size={24}
      {...props}
      style={{ color: "#2d5680"}}
    />
  );
}

const TabLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "darkslategray",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon(props) {
              return <TabBarIcons {...props} name="home" />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            headerShown: false,
            title: "Orders",
            tabBarIcon(props) {
              return <TabBarIcons {...props} name="list-ul" />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
