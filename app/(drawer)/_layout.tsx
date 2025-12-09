import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerTitle: "" }}>
      <Drawer.Screen
        name="welcome"
        options={{
          title: "Welcome",
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Portfolio App",
        }}
      />
      <Drawer.Screen
        name="(myList)"
        options={{
          title: "My-List Tobbaco",
        }}
      />
    </Drawer>
  );
}
