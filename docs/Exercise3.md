# 📘 README — Pantalla bienvenida.

Para realizar este ejercicio únicamente tenemos que añadir una nueva pantalla en la ruta **app/(drawer)/Welcome.tsx**, ya que al añadir un nuevo documento ahí, se crea automáticamente una pestaña en el Drawer. Para que esto funcione, necesita que tenga un export default function el componente.

```js
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  const handleNavigateToPortfolio = () => {
    router.replace("/(drawer)/(tabs)/user-info");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido User!</Text>

      <Image
        source={require("../../assets/SofyanAmrabat.jpg")}
        style={styles.welcomeImage}
      />

      <Text style={styles.message}>
        Este es Adrian, el + guapo de todos que me va a aprobar la práctica. :D
      </Text>

      <Button title="Ver mi Portfolio" onPress={handleNavigateToPortfolio} />
    </View>
  );
}
```

Es una pantalla básica, que muestra un texto de bienvenida, una imagen y una descripción to chula. He creado una función **handleNavigateToPortfolio**:

```js
const handleNavigateToPortfolio = () => {
  router.replace("/(drawer)/(tabs)/user-info");
};

///

<Button title="Ver mi Portfolio" onPress={handleNavigateToPortfolio} />;
```

Cuando hago click en el botón, llamo a la función **handleNavigateToPortfolio** que con router.replace(), reemplaza la pantalla actual en la pila de navegación por una nueva pantalla, en lugar de simplemente agregar la nueva pantalla encima y me redirige a **app/(drawer)/(tabs)/user-info**


[Volver](../README.md)