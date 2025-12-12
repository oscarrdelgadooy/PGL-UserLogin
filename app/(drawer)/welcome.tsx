import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { router } from "expo-router";
import { authStorageService } from "../../service/AuthStorage";
import { authApiService } from "../../service/Api";

export default function WelcomeScreen() {
  const handleNavigateToPortfolio = () => {
    router.replace("/RegisterScreen");
  };

  const logOff = async () => {
    await authStorageService.removeToken();
    router.replace("/LoginScreen");
  };

  const buttonDisplayToken = async () => {
    try {
      const data = await authApiService.welcomeApi();

      console.log(data);

      if (data.status == 200) {
        Alert.alert(data.object);
      } else {
        console.log("Token expirado o no encontrado.");
      }
    } catch (error) {
      console.log(error);
    }
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

      <Button title="Cerrar sesión" onPress={logOff} />

      <Button title="Ver mi Portfolio" onPress={handleNavigateToPortfolio} />

      <Button title="Ver mi Token" onPress={buttonDisplayToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  welcomeImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderWidth: 3,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
});
