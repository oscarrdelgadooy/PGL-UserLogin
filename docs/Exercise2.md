# 📘 README — Reciclar Portfolio App

Para realizar este ejercicio, he tenido que crear primero lo que sería la pantalla principal para navegar entre el drawer. He creado otro grupo (tabs) que representa la pantalla completa con el tabs únicamente para esa, que contendrá mis otras dos pantallas de la lista de Hobbies y la del QR.

Debemos de seguir esta estructura de carpetas dentro del drawer:

```
app/
 ├─ (drawer)/
    ├─ _layout.tsx
    └─ (tabs)/
       ├─ _layout.tsx  
       ├─ codeQr.tsx     
       └─ user-info.tsx  
```

## app/(drawer)/_layout.tsx

Tenemos que cambiar en la estructura del drawer, cada <Drawer.Screen> representa una pestaña personalizada (por decirlo así) dentro de lo visual del drawer que abre una pantalla nueva. Añadimos la pestaña de tabs (name="(tabs)" abre todo el grupo). Las demás pestañan se añaden automáticamente al crear el archivo .tsx con su correspondiente export default function.

```js
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerTitle: "" }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Portfolio App",
        }}
      />
    </Drawer>
  );
}

```

## app/(drawer)/(tabs)/_layout.tsx

Primero tendremos que importar la librería de los iconos.

```
expo install @expo/vector-icons
```

```js
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
            <Ionicons name="person-circle-outline" size={30} color={"#000"}  />
          ),
        }}
      />
      <Tabs.Screen
        name="codeQr"
        options={{
          title: "Mi Qr",
          tabBarIcon: () => (
            <Ionicons name="qr-code" size={30} color={"#000"}  />
          ),
        }}
      />
    </Tabs>
  );
}

const headerStyles = StyleSheet.create({});
```

Este componente nos añade el tab a nuestra pantalla. Que navega entre las dos pantallas de Información y el código QR.

## app/(drawer)/(tabs)/codeQR.tsx

Esta pantalla nos muestra el código QR del Github de nuestro queridísimo profesor Adrián.

```js
import { StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

export default function codeQr() {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.centerQR}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
}
```

## app/(drawer)/(tabs)/user-info.tsx

Esta pantalla nos muestra la información del usuario, con una pequeña descripción y una lista de actividades que el usuario ha elegido.

Tenemos una lista estática de actividades que mapeamos para mostrar una a una.

```js
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Description from "../../../components/Description";


export default function App() {
  const activities = [
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
      <View style={styles.bodyStyles}>
        <View>
          <View>
            <Description></Description>
          </View>
          <Text style={styles.listActivities}>Cosas que me gustan mucho:</Text>
          <ScrollView style={{ padding: 10 }}>
            {activities.map((activity) => (
              <Text key={activity} style={styles.stylePerActivity}>
                {activity}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
```

También importarmos el componente Description.

```js
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Description = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={require("../assets/SofyanAmrabat.jpg")}
      ></Image>
      <View style={styles.infoLabel}>
        <Text style={styles.textInfo}>Descripción sobre mí!</Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
};

export default Description;
```

[Volver](../README.md)