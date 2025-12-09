import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: "bottom",
      }}
    >
      <Tabs.Screen
        name="user-info"
        options={{
          title: "Mi Info",
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={30} color={"#000"} />
          ),
        }}
      />
      <Tabs.Screen
        name="codeQr"
        options={{
          title: "Mi Qr",
          tabBarIcon: ({ color }) => (
            <Ionicons name="qr-code" size={30} color={"#000"} />
          ),
        }}
      />
    </Tabs>
  );
}

const headerStyles = StyleSheet.create({});
